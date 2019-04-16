import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import { ALLOW_MULTIPLE_PLATFORMS } from '@angular/core/src/application_ref';
import { GlobalService } from 'src/app/global.service';
// import { OneSignal, OneSignalOriginal } from '@ionic-native/onesignal';
// import { OneSignal, OneSignalOriginal } from 'plugins/onesignal-cordova-plugin/www/OneSignal.js';
import { OneSignal } from '@ionic-native/onesignal/ngx'; // pare il più bello...

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.page.html',
  styleUrls: ['./subscriptions.page.scss'],
})
export class SubscriptionsPage implements OnInit {

 /* nome = '';
  cognome = '';
  id = '';*/
  public tags: any; // sta qua per prove
  filteredItems: any;
  searchTerm: string;
  public items: Array<string> = ['uno', 'due', 'tre', 'pippozzo'];


  constructor(public navCtrl: NavController, public http: HttpClient, private router: Router,
    public globalService: GlobalService,
    public onesignal: OneSignal
    ) {
    this.loadData();
  }



  loadData() {
    this.items = ['tizio', 'caio', 'saylor moon'];
    let data: Observable<any>;
    data = this.http.get('assets/elenco_docenti.json');
    data.subscribe(result => {
      // alert('data pre: ' + this.globalService.bestia); // funziona
      // this.globalService.bestia += 'vaffanculo';
      // alert('data post: ' + this.globalService.bestia);
      // alert('data pre: ' + this.items); // ok se non è any
      // Object.entries(this.items).forEach(
      //   ( [indice, valore], indice2, boh2 ) => {
      //     alert('foreach  data:\n' +  valore); // funziona !
      //     this.items.push('cucu');
      //   }
      // );
      // alert('data post: ' + this.items);
      // alert(result.data.children);
      this.tags = result;
      // alert('test tag: ' + JSON.stringify(this.tags));
      // alert('[0]: ' + JSON.stringify(this.tags[0]));
      // alert('[0].cognome: ' + JSON.stringify(this.tags[0].cognome));
      // result.forEach(element => {
      //   alert( JSON.stringify(element) ); // funziona
      //   alert( JSON.stringify(element.cognome) ); //funziona
      //   alert( JSON.stringify(element.stocazzo) ); // esce undefined ma non crasha
      // });
      // let myjson: JSON = result;
      // myjson = JSON.parse(result);
      // console.log(myjson);
      // var qp = [];
      // alert(myjson);
      // alert(JSON.stringify(myjson[0].cognome));
      // qp.push(myjson);
      // alert(qp[0].JSON());
      alert('bestia2: ' + this.globalService.bestia2 );
      // this.onesignal.getTags().then(function(tags) {
      //   alert('speranza 1: ' + this.items); // se ne sbatte la michia e non parte
      //   alert('speranza 2: ' + this.globalService.bestia);
      // });
      window['plugins'].OneSignal.sendTag('test', 'pippozzo 33');
      let bestiaos = window['plugins'].OneSignal.getTags(function(tags) {
        alert('onesignal parte');
        bestiaos = '33';
        alert('bestia ones: ' + String(bestiaos));
        bestiaos = JSON.stringify(tags);
        // alert(this.items); // non funziona
        // alert(window['SubscriptionsPage'].items); // non funziona
        // alert('os glob 1: ' + this.globalService.bestia);
        // this.globalService.bestia += ' io ti maledico !';
        // alert('os glob 2: ' + this.globalService.bestia);
        // Object.entries(this.items).forEach(
        //   ( [indice, valore], indice2, boh2 ) => alert('foreach  onesignal:\n' +  valore) // funziona !
        // );
        console.log('one signal tags stringify: ' + JSON.stringify(tags));
        alert('one signal tags stringify: ' + JSON.stringify(tags)); // mostra un avviso con i tag, utile per debug
        alert('one signal tags.test stringify: ' + JSON.stringify(tags.test)); // funziona
        // for (let key in tags) {
        //     alert('for 1: ' + key); // funziona !
        //     alert('for 1: ' + tags[key]); // funziona !
        //     // Use `key` and `value`
        // }
        // Object.entries(tags).forEach(
        //   ([key, value]) => alert('for obj:\n' + key + '\n' + value) // funziona !
        // );
        // alert('one signal tags[0].test stringify: ' + JSON.stringify(tags[0].test)); // FALLISCE - non fa andare avanti
        // alert('one signal tags[0] stringify: ' + JSON.stringify(tags[0])); // FALLISCE - non fa andare avanti
        // alert( Object.entries(tags).push(this.SubscriptionsPage.items) );
        // alert(this.SubscriptionsPage.items);
        alert('fine onesignal');
      });
      alert('test bestia 1: ' + bestiaos); // ovviamente per un fatto di tempo non lo trova
      setTimeout(function () {
        alert('test bestia 2: ' + bestiaos); // lo trova O.O
      }, 5000);
    }); // fine data.subscribe

  } // fine loaddata

  /*toDetailPage(item: number) {
    this.nome = item['nome'];
    this.cognome = item['cognome'];
    this.id = item['id'];
    this.router.navigate(['detail/' + this.nome + '/' + this.cognome + '/' + this.id]);
  }*/


  ngOnInit() {
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

