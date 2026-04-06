@echo off
echo ========================================================
echo Pushing "Databases (ZC0229) - WT (2025)" to GitHub...
echo ========================================================

:: Zorg ervoor dat het script in de huidige map wordt uitgevoerd
cd /d "%~dp0"

:: Initialiseer git als het nog geen git repository is
if not exist .git (
    echo Initializing git repository...
    git init
    git branch -M main
    git remote add origin https://github.com/PJPRORL/Database-Course.git
)

:: Fix voor "Filename too long" in Git
git config core.longpaths true

:: Fix voor netwerk timeouts bij grote pushes (HTTP 408 curl 22 error)
git config http.postBuffer 2147483648
git config http.lowSpeedLimit 1000
git config http.lowSpeedTime 600
git config http.version HTTP/1.1

:: Verwijder geneste .git mappen (zodat alles in deze ene repo komt)
echo Checking for nested repositories...
for /d /r %%i in (.git) do (
    if not "%%~fi"=="%~dp0.git" (
        rmdir /s /q "%%~fi" >nul 2>&1
    )
)

:: Cache leegmaken in het geval van eerder geweigerde bestanden
git rm -r --cached . >nul 2>&1

:: Alle gewijzigde of nieuwe bestanden toevoegen
echo Adding files...
git add .

:: Alle wijzigingen committen met een datum- en tijdstempel
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set TIMESTAMP=%datetime:~0,4%-%datetime:~4,2%-%datetime:~6,2% %datetime:~8,2%:%datetime:~10,2%

echo Committing with message: Backup van %TIMESTAMP%
git commit -m "Backup van %TIMESTAMP%"

:: Push naar GitHub
echo Pushing to main branch...
git push -u origin main

echo ========================================================
echo Push voltooid!
echo ========================================================
pause
