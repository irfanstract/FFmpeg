



@REM @echo off



@REM cd %~dp0


@REM @echo "== fftools =="
@REM %~dp0\r-find-specific-cpps.bat J:\Dev\ff202303\fftools  

@REM @echo "== libavutil =="
@REM %~dp0\r-find-specific-cpps.bat  J:\Dev\ff202303\libavutil

@REM @echo "== libavformat =="
@REM %~dp0\r-find-specific-cpps.bat  J:\Dev\ff202303\libavformat

%~dp0\r-find-specific-cpps.bat J:\Dev\ff202303\fftools  J:\Dev\ff202303\libavutil J:\Dev\ff202303\libavformat

@REM r-find-specific-cpps.bat  J:\Dev\ff202303\libavcodec








