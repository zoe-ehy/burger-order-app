import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})

export class IngredientService {

  menuIngredients=[]

  bread = new Ingredient("Burger Bread", 1.00);
  chicken = new Ingredient("Chicken", 2.00);
  meat = new Ingredient("Meat", 2.00);
  vegetable = new Ingredient("Vegetable", 0.50);
  cheese = new Ingredient("Burger Bread", 1.00);

  constructor() { }

getBread() {
      return this.bread;
  }

getChicken() {
    return this.chicken;
}

getMeat() {
    return this.meat;
}

getVegetable() {
    return this.vegetable;
}

getCheese() {
    return this.cheese;
}

}