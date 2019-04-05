import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  nome:any;
  cognome:any;
  id:any;
  constructor(private activatedRoute: ActivatedRoute) {


  }

  subscribe() { // passo item come dizionario, cosi ho tutti gli attributi
    alert('Ti sei iscritto agli avvisi di ' +
        this.nome + ' ' + this.cognome);
    window['plugins'].OneSignal.sendTag(this.id, 1);
  }

  unsubscribe() { // passo item come dizionario, cosi ho tutti gli attributi
    alert('Ti sei disiscritto agli avvisi di ' +
        this.nome + ' ' + this.cognome );
    window['plugins'].OneSignal.deleteTag(this.id, 1);
  }

  ngOnInit() {
    this.nome = this.activatedRoute.snapshot.paramMap.get('nome');
    this.cognome = this.activatedRoute.snapshot.paramMap.get('cognome');
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
