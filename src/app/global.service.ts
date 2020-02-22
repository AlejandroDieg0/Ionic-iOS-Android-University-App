import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public testb1 = '123';
  public testb2: any = 'tutto';
  constructor() {
    console.log('GlobalService - vf');
  }
}
