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

function transformNotionData(notionPages) {
  console.log("Transforming Notion data...");
  const transformedData = notionPages.map(page => ({
    objectID: page.id,
    slug: page.properties.Name?.title?.[0]?.text?.content?.toLowerCase().replace(/\s+/g, '-') || '',
    Name: page.properties.Name?.title?.[0]?.text?.content || 'Untitled',
    Description: page.properties.Description?.rich_text?.[0]?.text?.content || '',
    "Date Created": page.properties['Date Created']?.created_time || null,
    "Date Evaluated": page.properties['Date Evaluated']?.date?.start || null,
    Media: page.properties['Media']?.files?.[0]?.file?.url || '/blog-placeholder-1.jpg',
    Topics: page.properties.Topics?.multi_select?.map(t => t.name) || [],
  }));
  console.log(`Transformed ${transformedData.length} items`);
  return transformedData;
}

async function updateAlgoliaIndex(data) {
  console.log(`Updating Algolia index '${ALGOLIA_INDEX_NAME}'...`);
  const index = algolia.initIndex(ALGOLIA_INDEX_NAME);
  
  // Check for existing objects and update or add as necessary
  const existingObjects = await index.getObjects(data.map(item => item.objectID));
  const objectsToUpdate = data.filter(item => 
    !existingObjects.results.some(existingItem => 
      existingItem && existingItem.objectID === item.objectID
    )
  );

  if (objectsToUpdate.length > 0) {
    const result = await index.saveObjects(objectsToUpdate);
    console.log(`Updated ${result.objectIDs.length} objects in Algolia`);
    return result;
  } else {
    console.log("No new objects to update in Algolia");
    return { objectIDs: [] };
  }
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
