import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.page.html',
  styleUrls: ['./subscriptions.page.scss'],
})
export class SubscriptionsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    
    window['plugins'].OneSignal.getTags(function(tags) {
      console.log('Tags Received: ' + JSON.stringify(tags));
      // alert('Tags Received: ' + JSON.stringify(tags)); // mostra un avviso con i tag, utile per debug
    });
  }

  }


