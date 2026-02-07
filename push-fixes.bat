@echo off
echo Opening Git Bash...
cd /c/Users/krish/Desktop/satyammashroom
git add data/recipes.js
git commit -m "Fix recipe image paths for deployment"
git push origin main
echo.
echo Fixes pushed to GitHub!
echo.
echo Your recipes page should work now!
pause
