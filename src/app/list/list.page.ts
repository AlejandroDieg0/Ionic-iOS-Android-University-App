import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ALLOW_MULTIPLE_PLATFORMS } from '@angular/core/src/application_ref';

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
      // alert('Tags Received: ' + JSON.stringify(tags)); // mostra un avviso con i tag, utile per debug
    });
  }
}

/*
esperimenti di merda per i gettags

in gettags
alert('test2' + JSON.parse(tags) ); // NON funziona
alert('test3' + tags[0] );
this.items = [ 1, 2, 3, 4, 5, 6 ]; // non funziona, presumo che non trovi "this"

esperimenti per rinominare i json, inutili
  loadData_daitag() { // scarica i tag e li mette nell'elenco
    // this.items = [1, 2, 3 ];
    // funziona
    // this.items = JSON.parse('[{"cognome" : "c","id" : "1","nome" : "n"},{"cognome" : "f","id" : "2","nome" : "N"}]');
    let stringa = '{"33" : "AA", "44" : "BB" }';
    this.items = JSON.parse(stringa);
    stringa = stringa.replace('{', '[');
    stringa = stringa.replace('}', ']');
    alert(
      JSON.parse('["33" : "AA", "44" : "BB"]')
      // stringa
    );
    this.items[0] = 33;
    this.items[1] = 33;
  }

*/
