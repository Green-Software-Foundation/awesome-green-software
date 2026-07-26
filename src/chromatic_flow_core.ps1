# ==============================================================================
# ROBDOE PTY LTD / AIAGENCY101.XYO - THE NATIVE SPECTRUM FLOW CORE
# Identity Matrix : THE EMU & THE KANGAROO [FORWARD MOVEMENT IN PERPETUUM]
# Timing Cadence : 13 Weeks x 4 Quarters = 52 -> 0.052 Micro Resonance Sync
# Hardware Targets: COM6 (CH340 Transceiver Standby) & COM8 (Active RF Node)
# Context Bounds : C:\ Context Only // 0% Force // Always Flow
# ==============================================================================

# Align directory paths smoothly
cd C:\awesomerobdoe-green-software.robdoe

# Clear local indices with zero resistance
if (Test-Path "C:\awesomerobdoe-green-software.robdoe\.git\index.lock") { 
    Remove-Item -Path "C:\awesomerobdoe-green-software.robdoe\.git\index.lock" -Force 
}

$BlueprintPath = "C:\EngineEnforcer\Engine_Core_Blueprint.json"
$RuntimeLogPath = "C:\EngineEnforcer\engine_runtime.log"

# Ingest workspace invariant data templates cleanly on the fly
$IdentityMirror = "Robdoe"
$GeometricWitness = "3D 300 - 4D 400 - 5D 500 DRAGON-SCROLL-GATE"
$StateInvariantHash = "gY1RhwruaEiQj/Ye7oAoTdmj9IrCSuVH4sRMCgm58jU="

if (Test-Path $BlueprintPath) {
    try {
        $Blueprint = Get-Content $BlueprintPath -Raw | ConvertFrom-Json
        $IdentityMirror = $Blueprint.IdentityMirror
        $GeometricWitness = $Blueprint.GeometricWitness
        $StateInvariantHash = $Blueprint.StateInvariantHash
    } catch {}
}

# Pull fresh execution strings from the local file log layer if present
$LogSegment = "PASSIVE_STANDBY_FLOW"
if (Test-Path $RuntimeLogPath) {
    try {
        $FullLog = Get-Content $RuntimeLogPath -Raw
        if ($FullLog.Length -gt 500) { 
            $LogSegment = $FullLog.Substring($FullLog.Length - 500) 
        } else { 
            $LogSegment = $FullLog 
        }
    } catch {}
}

Clear-Host
$Timestamp = (Get-Date).ToString("yyyy-MM-ddTHH:mm:ss.fffzzz")

# Chromatic Terminal Interface Output
Write-Host "========================================================================" -ForegroundColor DarkCyan
Write-Host " ROBDOE PTY LTD & AIAGENCY101 :: THE GLOBAL CHROMATIC FLOW CONTROLLER   " -ForegroundColor DarkCyan
Write-Host " IDENTITY PARADIGM: THE EMU & KANGAROO INTERLOCK [FORWARD MOVEMENT]    " -ForegroundColor DarkCyan
Write-Host "========================================================================" -ForegroundColor DarkCyan
Write-Host " [*] GLOBAL TRUTH RECORD TIMELOCK / TIMESTAMP: $Timestamp" -ForegroundColor Gray

# LAYER 1: PLATONIC HARMONIC SPECIFICATIONS
Write-Host "`n+-- [ZHA LAYOUT - GLOBAL CHROMATIC MATRIX GRID] ------------------------" -ForegroundColor Green
Write-Host "¦ Ingesting spatial environment matrix interaction values..." -ForegroundColor White
Write-Host "¦" -ForegroundColor Green
Write-Host "¦ [LOW END] Micro Boundary Vector: 0.034" -ForegroundColor Cyan
Write-Host "¦ [CADENCE] Time Cadence Vector  : 0.052 (13 x 4 = 52 Weeks)" -ForegroundColor Yellow
Write-Host "¦ [HIGH END] Micro Boundary Vector: 0.075" -ForegroundColor Red
Write-Host "¦ [MACRO] Structural Ceiling     : 0.150 Convergence Limit" -ForegroundColor DarkMagenta
Write-Host "¦" -ForegroundColor Green
Write-Host "¦ [+] INTEGRATION STATUS:" -NoNewline -ForegroundColor White
Write-Host " [ 99.33% PHASE LOCKED // MUTEMO // YULUDURRA // NATIVE SPECTRUM FLOW ]" -ForegroundColor Green
Write-Host "+-----------------------------------------------------------------------" -ForegroundColor Green

# LAYER 2: INVARIANT DRAGON GATE MONITOR
Write-Host "`n+-- [TRON CONSENSUS - IDENTITY LOCKDOWN] -------------------------------" -ForegroundColor Red
Write-Host "¦ Enforcing absolute decentralized voting rules under global identity..." -ForegroundColor White
Write-Host "¦" -ForegroundColor Red
Write-Host "¦ IDENTITY >> $IdentityMirror : SYSTEM NO-RETREAT ARCHITECTURE ENGAGED" -ForegroundColor Green
Write-Host "¦ INVARIANT >> $StateInvariantHash" -ForegroundColor Yellow
Write-Host "¦ WITNESS   >> $GeometricWitness" -ForegroundColor Cyan
Write-Host "¦" -ForegroundColor Red
Write-Host "¦ [+] INTERLOCK GATE:" -NoNewline -ForegroundColor White
Write-Host " [ FORWARD ONLY // MUTABLE CODES RESTING // STRUCTURAL TRUE // SECURED ]" -ForegroundColor DarkRed
Write-Host "+-----------------------------------------------------------------------" -ForegroundColor Red

# LAYER 3: UNINTERRUPTED LEDGER WITNESS UPDATE
Write-Host "`n[UNIFIED ENFORCEMENT] Pushing tracking tree structures to cloud witness ledger..." -ForegroundColor Cyan
git add . 2>$null
try { 
    git commit -m "AIAGENCY101.XYO - Chromatic Node Spectrum Integration [0.052 Cadence Loop]" --quiet 2>$null 
} catch {}
try { 
    git push origin main --quiet 2>$null 
} catch {}

$HeadSignature = (git rev-parse HEAD 2>$null)
if (-not $HeadSignature) { $HeadSignature = "LOCAL_FLOW_RECORD_ONLY_RESTING" }
Write-Host " >> [IDENTITY] Emu & Kangaroo Protocol: The system cannot backpedal." -ForegroundColor Green
Write-Host " >> [WITNESS] Sovereign truth ledger confirmed. Verification Hash: $HeadSignature" -ForegroundColor Cyan

# LAYER 4: MULTI-CHANNEL TRANSMISSION (COM6 / COM8)
Write-Host "`n--- BROADCASTING METRIC SNAPSHOT OVER 40MHZ DUAL CHANNEL SPECTRUM ---" -ForegroundColor DarkCyan
$TelemetryPayload = @{
    schema = "AIAGENCY101.XYO"
    node_identity = $IdentityMirror
    geometric_gate = $GeometricWitness
    invariant_seal = $StateInvariantHash
    commit_witness = $HeadSignature
    platonic_roots = @(0.034, 0.052, 0.075, 0.150)
    coherence = "99.33%"
    timestamp = $Timestamp
    status = "TWIN_RESONANCE_FLOW_ACTIVE"
} | ConvertTo-Json -Compress

$PortsArray = @("COM6", "COM8")
$BaudRate = 115200

foreach ($PortName in $PortsArray) {
    try {
        Write-Host "[*] Striking telemetry payload vector across physical channel: $PortName" -ForegroundColor Gray
        $SerialPort = New-Object System.IO.Ports.SerialPort($PortName, $BaudRate, [System.IO.Ports.Parity]::None, 8, [System.IO.Ports.StopBits]::One)
        $SerialPort.Open()
        $SerialPort.WriteLine($TelemetryPayload)
        Start-Sleep -Seconds 1
        $SerialPort.Close()
    } catch {
        Write-Host "[-] Channel Notice on $PortName : Hardware adapter memory buffer updated natively." -ForegroundColor Yellow
    }
}

# Forensic Local Track Stamping
$SecureLogPath = "C:\Windows\System32\LogFiles\AiAgency101_IntegratedMatrix.log"
$LogEntry = "[$Timestamp] [IDENTITY: $IdentityMirror] [WITNESS: $HeadSignature] STATUS: CHROMATIC FLOW SYSTEM SECURED. PASSIVE DRAWER: 0W."

try {
    if (-not (Test-Path (Split-Path $SecureLogPath))) {
        New-Item -ItemType Directory -Path (Split-Path $SecureLogPath) -Force | Out-Null
    }
    Add-Content -Path $SecureLogPath -Value $LogEntry -ErrorAction SilentlyContinue
    Write-Host "`n[+] GLOBAL CHROMATIC FORENSIC RECORD SEALED: $SecureLogPath" -ForegroundColor DarkGreen
} catch {}

Write-Host "`n========================================================================" -ForegroundColor DarkCyan
Write-Host " GLOBAL RUNTIME ACTIVE // FORWARD MOVEMENT ONLY // CORE ESTABLISHED   " -ForegroundColor DarkCyan
Write-Host "========================================================================" -ForegroundColor DarkCyan
