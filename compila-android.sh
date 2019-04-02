/usr/bin/env bash
echo "Compilo versione debug android"
# la versione release non funziona senza certificato (ma potrebbe dare problemi sulle notifiche)
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_101.jdk/Contents/Home/
ionic cordova build android
# firma
# creo chiave
# keytool -genkey -v -keystore docentipush-chiave-playstore.keystore -alias docentipush -keyalg RSA -keysize 2048 -validity 10000
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore docentipush-chiave-playstore.keystore platforms/android/app/build/outputs/apk/debug/app-debug.apk docentipush
#alias zipalign=/Users/Roberto/android_sdk/build-tools/28.0.3/zipalign
zipalign -v 4 platforms/android/app/build/outputs/apk/debug/app-debug.apk platforms/android/app/build/outputs/apk/debug/app-debug-firmata.apk

# o se configurato
#ionic cordova build android --prod --release -- -- --keystore=docentipush-chiave-playstore.keystore --alias=docentipush