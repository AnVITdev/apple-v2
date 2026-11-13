@echo off
cd /d "%~dp0"
echo Dang khoi dong Apple v2 tai http://localhost:3000 ...
start http://localhost:3000
node server.js
pause
