#!/usr/bin/env bash
set -e
echo "Compilo versione debug android"
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_101.jdk/Contents/Home/
ionic cordova build android
echo "Compilo versione prod/release android"
# PER FIRMARE:
# creo la chiave
# keytool -genkey -v -keystore docentipush-chiave-playstore.keystore -alias docentipush -keyalg RSA -keysize 2048 -validity 10000
#ionic cordova build android --prod --release -- -- --keystore=docentipush-chiave-playstore.keystore --alias=docentipush
ionic cordova build android --prod --release
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore docentipush-chiave-playstore.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk docentipush
#alias zipalign=/Users/Roberto/android_sdk/build-tools/28.0.3/zipalign
zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk platforms/android/app/build/outputs/apk/release/app-release-signed-manuale.apk
