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
    data = this.http.get("assets/elenco_docenti.json");
    data.subscribe(result=> {
      this.items=result;
    })
  }
  itemClick(itemid:number){
    alert("il professore che hai cliccato ha id "+itemid);
    window['plugins'].OneSignal.sendTag(itemid, itemid);
  }
  ngOnInit() {

    window['plugins'].OneSignal.getTags(function(tags) {
      console.log('Tags Received: ' + JSON.stringify(tags));

    });
  }
}
