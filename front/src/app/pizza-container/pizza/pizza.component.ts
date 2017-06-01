import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../../models/pizza';
import {MenuItem} from 'primeng/primeng';
import { HttpService } from '../../http.service';
import { EventService } from '../../event.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  @Input() pizza: Pizza;

  items: MenuItem[];
  display: boolean = false;

  constructor(
    private httpService: HttpService,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.items = [
        {label: 'Modifier', icon: 'fa-pencil-square-o', command: () => {
            this.update();
        }},
        {label: 'Delete', icon: 'fa-trash', command: () => {
            this.delete();
        }}
    ];
  }

  command() {
    this.eventService.setAddToCommand(this.pizza);
  }

  update() {
    console.log('update');
    this.display = true;
  }

  delete() {
    this.httpService.deletePizza(this.pizza._id).then(res => {
      console.log('res: ', res);
      this.eventService.setIsUpdate(true);
    });
  }
}
