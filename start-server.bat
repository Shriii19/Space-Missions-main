@echo off
echo Starting Space Missions Dashboard...
echo.
echo This will start a local web server to serve your dashboard.
echo The dashboard will be available at: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server when you're done.
echo.
pause

cd /d "%~dp0"
python -m http.server 8000
