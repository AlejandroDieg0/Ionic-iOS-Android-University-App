#!/usr/bin/env bash
ionic cordova build ios --device -- --buildFlag="-UseModernBuildSystem=0"
ios-deploy -b platforms/ios/build/device/DocentiPUSH.ipa
