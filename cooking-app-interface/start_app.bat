@echo off
pushd "%~dp0"
echo Environment configured. Starting Cooking App...

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Node.js is not installed or not in your PATH.
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b
)

echo Node Version:
node -v
echo NPM Version:
call npm -v

if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
)

echo.
echo Starting development server...
call npm run dev
pause
popd
