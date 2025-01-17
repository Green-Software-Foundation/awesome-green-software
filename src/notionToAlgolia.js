import { Client } from "@notionhq/client";
import algoliasearch from "algoliasearch";
import dotenv from "dotenv";

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const algolia = algoliasearch(
  process.env.PUBLIC_ALGOLIA_APP_ID,
  process.env.ALGOLIA_ADMIN_API_KEY
);

const NOTION_DATABASE_ID = "50a1e9725143458dac1ae068d9dd10e0";
const ALGOLIA_INDEX_NAME = "GreenSoftwareFoundationFrontend50a1e9725143458dac1ae068d9dd10e0";

console.log("Starting Notion to Algolia sync...");

function getTodayDate() {
  const today = new Date();
  return today.toISOString().split('T')[0]; // Returns date in YYYY-MM-DD format
}

async function fetchNotionData() {
  console.log("Fetching data from Notion...");
  const today = getTodayDate();
  const filter = {
    and: [
      {
        property: 'Status',
        status: {
          equals: 'Accepted',
        },
      },
      {
        property: 'Date Evaluated',
        date: {
          equals: today,
        },
      },
    ],
  };

  const allResults = [];
  let hasMore = true;
  let startCursor = undefined;

  while (hasMore) {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter,
      sorts: [
        {
          property: 'Date Evaluated',
          direction: 'descending',
        },
      ],
      page_size: 100,
      start_cursor: startCursor,
    });

    allResults.push(...response.results);

    hasMore = response.has_more;
    startCursor = response.next_cursor;
  }

  console.log(`Fetched ${allResults.length} items from Notion evaluated today`);
  return allResults;
}

function validateNotionPage(page) {
  console.log("\nValidating Notion page data (Raw):");
  console.log("ID:", page.id);
  console.log("All Properties:", JSON.stringify(page.properties, null, 2));
  
  // Check for actual property names in Notion
  const propertyNames = Object.keys(page.properties);
  console.log("Available Property Names:", propertyNames);
  
  // Check if required fields exist with potential alternate names
  const missingFields = [];
  const tags = page.properties['Tags'] || page.properties['tags'];
  const github = page.properties['GitHub'] || page.properties['github'] || page.properties['Github'];
  
  if (!tags?.multi_select) missingFields.push('Tags');
  if (!github?.url) missingFields.push('GitHub URL');
  
  if (missingFields.length > 0) {
    console.warn(`Warning: Missing fields for page "${page.properties.Name?.title?.[0]?.text?.content}":`, missingFields);
  }
  
  return true;
}

function transformNotionData(notionPages) {
  console.log("Transforming Notion data...");
  
  const formatUrl = (url) => {
    if (!url) return '';
    
    try {
      let urlObj;
      if (url.startsWith('http://') || url.startsWith('https://')) {
        urlObj = new URL(url);
      } else {
        urlObj = new URL(`https://${url}`);
      }
      return urlObj.toString();
    } catch (error) {
      console.warn(`Invalid URL found: ${url}`);
      return ''; 
    }
  };

  const transformedData = notionPages.map(page => {
    // Get single tag from select field
    const tag = page.properties['Tags']?.select?.name;
    const tags = tag ? [tag] : [];  // Convert single tag to array

    const transformed = {
      objectID: page.id,
      slug: page.properties.Name?.title?.[0]?.text?.content?.toLowerCase().replace(/\s+/g, '-') || '',
      Name: page.properties.Name?.title?.[0]?.text?.content || 'Untitled',
      Description: page.properties.Description?.rich_text?.[0]?.text?.content || '',
      "Date Created": page.properties['Date Created']?.created_time?.split('T')[0] || null,
      "Date Evaluated": page.properties['Date Evaluated']?.date?.start?.split('T')[0] || null,
      Media: page.properties['Media']?.files?.[0]?.file?.url || '/blog-placeholder-1.jpg',
      Topics: page.properties.Topics?.multi_select?.map(t => t.name) || [],
      Tags: tags,  // Use the converted tags array
      Category: page.properties.Category?.select?.name || '',
      GitHub: formatUrl(page.properties['GitHub URL']?.url || ''),  // Use correct property name
      URL: formatUrl(page.properties['URL']?.url || '')
    };

    console.log("\nTransformed data verification:");
    console.log("Raw Tag:", page.properties['Tags']?.select);
    console.log("Final Tags:", transformed.Tags);
    console.log("Raw GitHub URL:", page.properties['GitHub URL']?.url);
    console.log("Final GitHub:", transformed.GitHub);
    
    return transformed;
  });

  console.log(`Transformed ${transformedData.length} items`);
  return transformedData;
}

async function updateAlgoliaIndex(data) {
  console.log(`Updating Algolia index '${ALGOLIA_INDEX_NAME}'...`);
  const index = algolia.initIndex(ALGOLIA_INDEX_NAME);
  
  // Get all records from Algolia
  const existingRecords = [];
  await index.browseObjects({
    batch: objects => {
      existingRecords.push(...objects);
    }
  });

  // Find records to delete (exist in Algolia but not in new data)
  const newObjectIds = new Set(data.map(item => item.objectID));
  const recordsToDelete = existingRecords
    .filter(record => !newObjectIds.has(record.objectID))
    .map(record => record.objectID);

  // Delete records that no longer exist in Notion
  if (recordsToDelete.length > 0) {
    await index.deleteObjects(recordsToDelete);
    console.log(`Deleted ${recordsToDelete.length} objects from Algolia`);
  }

  // Update all current records
  if (data.length > 0) {
    const result = await index.saveObjects(data);
    console.log(`Updated ${result.objectIDs.length} objects in Algolia`);
    return result;
  }
  
  return { objectIDs: [] };
}

async function syncNotionToAlgolia() {
  try {
    console.log("Starting Notion to Algolia sync...");
    const notionData = await fetchNotionData();
    const transformedData = transformNotionData(notionData);
    const result = await updateAlgoliaIndex(transformedData);
    console.log("Sync completed successfully");
    console.log("New or updated object IDs:", result.objectIDs);
  } catch (error) {
    console.error("Error during sync:", error);
  }
}

syncNotionToAlgolia();

export { syncNotionToAlgolia };
