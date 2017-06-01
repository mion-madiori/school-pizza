import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Pizza } from '../models/pizza';
import { EventService } from '../event.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-pizza-container',
  templateUrl: './pizza-container.component.html',
  styleUrls: ['./pizza-container.component.css']
})
export class PizzaContainerComponent implements OnInit {

  display: boolean = false;
  listPizza: Array<Pizza>;

  isUpdate: Subscription;

  constructor(
    private httpService: HttpService,
    private eventService: EventService
  ) {
    this.isUpdate = eventService.isUpdate$.subscribe(isUp => {
      if (isUp) {
        this.getAllPizzas();
        this.display = false;
      }
    });
  }

  ngOnInit() {
    this.getAllPizzas();
  }

  showDialog() {
      this.display = true;
  }

  getAllPizzas() {
    this.httpService.getAllPizza().then(pizzas => {
      this.listPizza = pizzas;
    });
  }

}
