import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public bestia = '123';
  public bestia2: any = 'tutto';
  constructor() {
    console.log('GlobalService - vaffanculo');
  }
}
