@echo off
setLocal EnableDelayedExpansion
for /f %%a in ('dir /b WebSiteFolder/*.ts') do ( set str=!str! "%%a" )
tsc !str!
msbuild WebSiteProject.sln