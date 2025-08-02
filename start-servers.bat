@echo off
echo Starting ServiceHub Application...
echo.

echo Starting Backend Server (NestJS)...
start "Backend" cmd /k "cd /d e:\COURSE\PROJECTS\Callus\backend-nestjs && npm run start:dev"

timeout /t 3 >nul

echo Starting Frontend Server (Next.js)...
start "Frontend" cmd /k "cd /d e:\COURSE\PROJECTS\Callus\frontend && npm run dev"

echo.
echo Both servers are starting...
echo Backend: http://localhost:3001
echo Frontend: http://localhost:3000
echo.
pause
