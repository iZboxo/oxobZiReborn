@echo off

:A
echo Jdu na to!
git add . && git commit -m 'oxobZi-1.0.3-Updates' && git push
timeout 1
GOTO B

:B
GOTO A

pause
