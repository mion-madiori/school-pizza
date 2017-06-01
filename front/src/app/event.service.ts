import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Pizza } from './models/pizza';

@Injectable()
export class EventService {

  private isUpdate = new Subject<boolean>();
  private addToCommand = new Subject<Pizza>();

  isUpdate$ = this.isUpdate.asObservable();
  addToCommand$ = this.addToCommand.asObservable();

  setIsUpdate(isUpdate:boolean){
    return this.isUpdate.next(isUpdate);
  }

  setAddToCommand(pizza:Pizza){
    return this.addToCommand.next(pizza);
  }

  constructor() { }

}
