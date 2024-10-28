




node .\build\ff-ranwithemcp\ffmpeg.js -loglevel verbose -f lavfi -i testsrc2=duration=5.1 -f null -c:v rawvideo myvideo



node .\build\ff-ranwithemcp\ffmpeg.js -loglevel verbose -f lavfi -i "testsrc2=duration=5.1:size=352x288,realtime" -f matroska -c:v h263 -flush_packets 1 file:///J:/Dev/alqwertyuiopasdfghjkl1cE.webm




node .\build\ff-ranwithemcp\ffmpeg.js -loglevel verbose -f lavfi -i "testsrc2=duration=5.1:size=352x288,realtime" -f matroska -c:v h263 -flush_packets 1 pipe: > J:\Dev\alqwertyuiopasdfkl1cE.webm




