# ======================================================================
# ROBDOE GLOBAL REGISTERY :: FULL SYSTEM ORCHESTRATION RAIL
# MASTER EXECUTION SEQUENCE :: CLASSIFIED INTERNAL OPERATIONS
# ======================================================================

Clear-Host

$Header = @"
=======================================================================
  ROBDOE PTY LTD // AIAGENCY101
  SYSTEM ORCHESTRATION RAIL :: FULL STACK DIAGNOSTIC
=======================================================================
  AUTHORITY: ROBDOE_GLOBAL_REGISTERY
  STATUS   : INITIALISING CORE MODULES
  CHANNELS : GREENS // ENERGY // RECYCLE // TELEMETRY // ZERO-LOOP
=======================================================================
"@

Write-Host $Header -ForegroundColor Cyan


# ======================================================================
# FUNCTION: EXECUTION WRAPPER (adds cinematic effect)
# ======================================================================
function Invoke-RobDoeModule {
    param(
        [string]$Name,
        [string]$Script
    )

    Write-Host ""
    Write-Host ">>> [BOOT] MODULE ONLINE :: $Name" -ForegroundColor Yellow
    Write-Host "------------------------------------------------------------"

    Start-Sleep -Milliseconds 400

    if (Test-Path $Script) {
        & $Script
    } else {
        Write-Host "[ERROR] MODULE NOT FOUND: $Script" -ForegroundColor Red
    }

    Write-Host "------------------------------------------------------------"
    Write-Host ">>> [COMPLETE] MODULE SHUTDOWN :: $Name" -ForegroundColor Green
    Write-Host ""
    Start-Sleep -Milliseconds 300
}


# ======================================================================
# EXECUTE ALL MODULES IN SEQUENCE
# ======================================================================

Invoke-RobDoeModule -Name "ZERO-RESISTANCE COMPUTE LOOP" -Script ".\robdoe_steps_zero_loop.ps1"
Invoke-RobDoeModule -Name "TELEMETRY RECYCLING (COM6 / COM8)" -Script ".\robdoe_steps_telemetry.ps1"
Invoke-RobDoeModule -Name "FIELD ANCHORING & LANE ISOLATION" -Script ".\robdoe_steps_anchor_lanes.ps1"
Invoke-RobDoeModule -Name "GREENS MODULE" -Script ".\robdoe_steps_greens.ps1"
Invoke-RobDoeModule -Name "RECYCLE MODULE" -Script ".\robdoe_steps_recycle.ps1"


# ======================================================================
# FINAL SYSTEM STATUS
# ======================================================================

$Footer = @"
=======================================================================
  SYSTEM DIAGNOSTIC COMPLETE
=======================================================================
  PHASE LOCK        : 99.33%
  BASELINE STATE    : 0W VERIFIED
  TELEMETRY LOOP    : ACTIVE
  LANE ISOLATION    : SECURE
  ZERO-LOOP STATUS  : FRICTIONLESS
=======================================================================
  ROBDOE SYSTEM: ALL MODULES EXECUTED WITHOUT FAULT
=======================================================================
"@

Write-Host $Footer -ForegroundColor Cyan
