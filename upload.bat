@echo off

:A
echo Jdu na to!
git add . && git commit -m 'update' && git push
timeout 0
GOTO B

:B
GOTO A

pause