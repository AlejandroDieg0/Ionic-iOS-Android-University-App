import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  public items: any;
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.loadData();
  }

  loadData() {
    let data: Observable<any>;
    data = this.http.get('assets/elenco_docenti.json');
    data.subscribe(result => {
      this.items = result;
    });
  }
  itemClick(item: number) { // passo item come dizionario, cosi ho tutti gli attributi
    alert('Ti sei iscritto agli avvisi del professor ' +
            item['nome'] + ' ' + item['cognome'] + '\nID:' + item['id'] );
    window['plugins'].OneSignal.sendTag(item['id'], 1);
  }
  ngOnInit() {

    window['plugins'].OneSignal.getTags(function(tags) {
      console.log('Tags Received: ' + JSON.stringify(tags));

    });
  }
}
