import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  public items:any;
  constructor(public navCtrl: NavController, public http: HttpClient){
  this.loadData();
  }

  loadData(){


    let data:Observable<any>;
    data = this.http.get("https://jsonplaceholder.typicode.com/posts");
    data.subscribe(result=> {
      this.items=result;
    })
  }
  itemClick(itemid:number){
    alert(itemid);
  }
  ngOnInit() {

    window['plugins'].OneSignal.sendTag("key", "value");

    window['plugins'].OneSignal.getTags(function(tags) {
      console.log('Tags Received: ' + JSON.stringify(tags));

    });
  }
}
