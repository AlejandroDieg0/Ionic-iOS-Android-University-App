#!/usr/bin/env bash
# per la prima volta o ionic da problemi
# npm install --save-dev @angular-devkit/build-angular
# npm uninstall -g ionic
# npm install -g @ionic/cli native-run cordova-res
# pod repo update #per far trovare onesignal
# ionic cordova platform rm ios
# ionic cordova platform add ios@latest --save
# ionic cordova plugin remove onesignal-cordova-plugin
# ionic cordova plugin add onesignal-cordova-plugin
# cordova plugin rm cordova-plugin-ionic-webview
# cordova plugin add cordova-plugin-ionic-webview@latest
set -e
ionic cordova build ios --device -- --buildFlag="-UseModernBuildSystem=0"
ios-deploy -b platforms/ios/build/device/DocentiPUSH.ipa

# testflight
# ionic cordova build ios --prod --release --device -- --packageType="app-store" --buildFlag="-UseModernBuildSystem=0"
