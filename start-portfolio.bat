@echo off
echo Starting Shiloh's Portfolio Website...
cd /d "%~dp0"
start http://localhost:5173
npm run dev
pause
