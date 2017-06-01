import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Pizza } from '../models/pizza';
import { Command } from '../models/command';

import { HttpService } from '../http.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  addToCard: Subscription;
  listPizza: Array<Pizza> = [];
  price: number = 0;
  display: boolean = false;
  command: Command = {
    firstname: '',
    lastname: '',
    phone: '',
    listPizza: []
  };

  firstname: String = '';
  lastname: String = '';
  phone: String = '';

  constructor(
    private eventService: EventService,
    private httpService: HttpService
  ) {
    this.addToCard = this.eventService.addToCommand$.subscribe(pizza => {
      this.listPizza.push(pizza);
      this.price += pizza.price;
    })
  }

  ngOnInit() {
  }

  showDialog(){
    this.display = true;
  }

  removePizza(pizza:Pizza){
    this.listPizza.forEach(thispizza => {
      let index: number;
      if(pizza === thispizza){
        index = this.listPizza.indexOf(thispizza);
        this.price -= pizza.price;
        this.listPizza.splice(index, 1);
      }
    })
  }

  validate() {
    this.command.listPizza = this.listPizza;
    this.command.lastname = this.lastname;
    this.command.firstname = this.firstname;
    this.command.phone = this.phone;

    this.httpService.validateCard(this.command).then(data => {
      console.log('data: ', data);
      this.display = false;
      this.listPizza = [];
      this.firstname = '';
      this.lastname = '';
      this.phone = '';
      this.price = 0;
    })
  }
}
