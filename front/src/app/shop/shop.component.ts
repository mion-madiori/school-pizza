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

  alert:boolean = false;

  timeout:any;

  constructor(
    private eventService: EventService,
    private httpService: HttpService
  ) {
    this.addToCard = this.eventService.addToCommand$.subscribe(pizza => {
      this.listPizza.push(pizza);
      this.price += pizza.price;
      clearTimeout(this.timeout);
      this.isAlert();
    })
  }

  ngOnInit() {
  }

  showDialog(){
    this.display = true;
  }

  removePizza(pizza:Pizza){

    for (let i = 0; i < this.listPizza.length; i++){
      if(pizza._id === this.listPizza[i]._id){
        let index: number;
        console.log('thispizza._id: ', this.listPizza[i]._id);
        console.log('pizza._id: ', pizza._id);
        index = this.listPizza.indexOf(pizza);
        this.price -= pizza.price;
        this.listPizza.splice(index, 1);
        return
      }
    }

  //   this.listPizza.forEach(thispizza => {
  //     if (pizza._id === thispizza._id) {
  //       let index: number;
  //       console.log('thispizza._id: ', thispizza._id);
  //       console.log('pizza._id: ', pizza._id);
  //       index = this.listPizza.indexOf(pizza);
  //       this.price -= pizza.price;
  //       this.listPizza.splice(index, 1);
  //       return
  //     }
  //   })
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

  isAlert(){
    this.alert = true;
    this.timeout = setTimeout(() => {
      this.alert = false;
    }, 3000);
  }
}
