import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";
import { ALLOW_MULTIPLE_PLATFORMS } from '@angular/core/src/application_ref';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  nome = '';
  cognome = '';
  id = '';
  filteredItems: any;
  searchTerm: string;
  public items: any;

  constructor(public navCtrl: NavController, public http: HttpClient, private router: Router) {
    this.loadData();
  }

  loadData() {
    let data: Observable<any>;
    data = this.http.get('assets/elenco_docenti.json');
    data.subscribe(result => {
      this.items = result;
      this.filteredItems = this.items;
    });
  }

  filterItem() {
    if ( this.searchTerm.length ) {
      this.filteredItems = this.items.filter(item =>  item['cognome'].toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
    } else {
      this.loadData();
    }
  }

  toDetailPage(item: number) {
    this.nome = item['nome'];
    this.cognome = item['cognome'];
    this.id = item['id'];
    this.router.navigate(['detail/' + this.nome + '/' + this.cognome + '/' + this.id]);
  }


  ngOnInit() {

  }
}
