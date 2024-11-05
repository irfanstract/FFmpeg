


@REM node .\build\ff-ranwithemcp\ffmpeg.js -loglevel verbose -encoders



@REM node .\test1.mjs -loglevel verbose -encoders


@REM node .\build\ff-ranwithemcp\ffmpeg.js -loglevel verbose -f lavfi -i testsrc2=duration=5.1 -f null -c:v rawvideo myvideo



@REM node .\build\ff-ranwithemcp\ffmpeg.js -loglevel verbose -f lavfi -i "testsrc2=duration=5.1:size=352x288,realtime" -f matroska -c:v h263 -flush_packets 1 file:///J:/Dev/alqwertyuiopasdfghjkl1cEj1c.webm




@REM node .\build\ff-ranwithemcp\ffmpeg.js -loglevel verbose -f lavfi -i "testsrc2=duration=5.1:size=352x288,realtime" -f matroska -c:v h263 -flush_packets 1 pipe: > J:\Dev\alqwertyuiopasdfkl1cEj.webm





node .\test1.mjs





