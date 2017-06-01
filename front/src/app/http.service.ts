import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Pizza } from './models/pizza';
import { Command } from './models/command';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  private BASE_URI: string = 'http://localhost:3000/pizzas/';
  private BASE_COMMAND: string = 'http://localhost:3000/command/';

  constructor(
    private http: Http
  ) { }

  addPizza(pizza: Pizza): Promise<Pizza> {
    return this.http
              .post(this.BASE_URI, pizza)
              .map(res => res.json())
              .toPromise();
  }

  getAllPizza(): Promise<Array<Pizza>> {
    return this.http
              .get(this.BASE_URI)
              .map(res => res.json())
              .toPromise();
  }

  deletePizza(id:any):Promise<any>{
    return this.http
              .delete(this.BASE_URI + '' + id)
              .map(res => res.json())
              .toPromise();
  }

  updatePizza(body:Pizza):Promise<any> {
    return this.http
              .put(this.BASE_URI + '' + body._id, body)
              .map(res => res.json())
              .toPromise();
  }

  validateCard(command: Command){
    return this.http
              .post(this.BASE_COMMAND, command)
              .map(res => res.json())
              .toPromise();
  }
}
