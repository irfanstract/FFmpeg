#!/bin/sh




# RegenerateVersionHpp.sh




# anticipate
# calls from anywhere other than exactly at this dir, including lower within here,
# 
# switch to this Dir
cd -- "$( dirname -- "${BASH_SOURCE[0]}" )"

echo "$(pwd )"




./ffbuild/version.sh . libavutil/ffversion.h













