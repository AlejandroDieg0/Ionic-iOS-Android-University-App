import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Docenti',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Iscrizioni',
      url: '/subscriptions',
      icon: 'notifications'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal
  ) {
    this.initializeApp();


  }

  initializeApp() {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
        this.oneSignal.startInit('6818eca8-2631-44d8-91df-e323ae0d5b60', '256550615333');

        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

        this.oneSignal.handleNotificationReceived().subscribe((res) => {
          console.log(res);
            // do something when notification is received
        });

        this.oneSignal.handleNotificationOpened().subscribe((res) => {
          console.log(res);
            // do something when a notification is opened
        });

        this.oneSignal.endInit();


    });
  }
}
