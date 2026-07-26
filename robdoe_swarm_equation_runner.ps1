# ======================================================================
# ROBDOE SWARM EQUATION RUNNER :: STANDALONE EXECUTION RAIL
# ======================================================================

Clear-Host

# -----------------------------------------------------------
# Define the execution wrapper locally
# -----------------------------------------------------------
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

# -----------------------------------------------------------
# Execute the swarm equation module
# -----------------------------------------------------------
Invoke-RobDoeModule -Name "SWARM EQUATION / CORE MATRIX BINDING" -Script ".\robdoe_swarm_equation.ps1"

# -----------------------------------------------------------
# Final footer
# -----------------------------------------------------------
$Footer = @"
=======================================================================
  SWARM EQUATION MODULE EXECUTION COMPLETE
=======================================================================
"@

Write-Host $Footer -ForegroundColor Cyan
