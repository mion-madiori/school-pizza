import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../../models/pizza';
import { HttpService } from '../../http.service';
import { EventService } from '../../event.service';

@Component({
  selector: 'app-form-pizza',
  templateUrl: './form-pizza.component.html',
  styleUrls: ['./form-pizza.component.css']
})
export class FormPizzaComponent implements OnInit {

  @Input() forUpdate: Pizza;
  ingredients: Array<String>;
  selectedIngredients: Array<String> = [];
  draggedIngredient: String;
  modify: boolean = false;
  image:any;

  textButton: String;

  setPizza: Pizza;

  chooseImage:Boolean = false;

  constructor(
    private httpService: HttpService,
    private eventService: EventService
  ) {
    this.setPizza = {
      name: '',
      _id: '',  
      price: 0,
      ingredients: []
    };

    this.ingredients = [];
    this.ingredients.push('ail');
    this.ingredients.push('brocolli');
    this.ingredients.push('fraises');
    this.ingredients.push('lait');
    this.ingredients.push('miel');
    this.ingredients.push('moutarde');
    this.ingredients.push('oeuf');
    this.ingredients.push('oignon');
    this.ingredients.push('poids');
    this.ingredients.push('poireaux');
    this.ingredients.push('saintjacque');
    this.ingredients.push('viande');
  }

  ngOnInit() {
    if (this.forUpdate) {
      this.textButton = 'Modifier';
      this.setPizza.name = this.forUpdate.name;
      this.setPizza._id = this.forUpdate._id;
      this.setPizza.price = this.forUpdate.price;
      this.setPizza.ingredients = this.forUpdate.ingredients;
      this.selectedIngredients = this.setPizza.ingredients;

    } else {
      this.textButton = 'Enregistrer';
    }
  }

  dragStart(event, Ingredient) {
      this.draggedIngredient = Ingredient;
  }

  dragEnd(event) {
      this.draggedIngredient = null;
  }

  drop(event) {
    if (this.draggedIngredient) {
      this.selectedIngredients.push(this.draggedIngredient);
    }
  }

  register(paramPizza) {

    if (!this.chooseImage) {
      if (this.forUpdate) {
        const pizza: Pizza = {
          _id: paramPizza._id,
          name: paramPizza.name,
          price: paramPizza.price,
          ingredients: this.selectedIngredients,
          image: this.image
        };

        this.httpService.updatePizza(pizza).then(data => {
          console.log('data: ', data);
          this.eventService.setIsUpdate(true);
        });

      } else {
        const pizza: Pizza = {
          name: paramPizza.name,
          price: paramPizza.price,
          ingredients: this.selectedIngredients,
          image: this.image
        };

        this.httpService.addPizza(pizza).then(data => {
          console.log('data: ', data);
          this.eventService.setIsUpdate(true);
        });
      }

      this.setPizza = {
        name: '',
        _id: '',
        price: 0,
        ingredients: []
      };

      this.selectedIngredients = [];
    }
  }

  remove(e) {
    if (this.modify) {
      this.selectedIngredients.forEach(ing => {
        if (e.target.id === ing) {
            let index: number;
            index = this.selectedIngredients.indexOf(ing);
            this.selectedIngredients.splice(index, 1);
          }
      });
    }
  }

  getModify(): boolean {
    return this.modify;
  }

  setImage(event){
    for(let file of event.files) {
      this.image = file.name;
      this.chooseImage = false;
    }
  }

  imageIsChoosed() {
    this.chooseImage = true;
  }

}
