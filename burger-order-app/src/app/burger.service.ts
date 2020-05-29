import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { IngredientService } from './ingredient.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BurgerService {

  allTypes: Ingredient[] = [new Ingredient("Chicken", 2.00), new Ingredient("Meat", 2.00), new Ingredient("Vegetable", 0.50), new Ingredient("Cheese", 1.00)];
  burgerStack: Ingredient[] = [new Ingredient("Burger Bread", 1.00), new Ingredient("Burger Bread", 1.00)];
  totalPrice = 2.00;
  priceEmitter = new EventEmitter<number>();
  stackEmitter = new EventEmitter<Ingredient[]>();

  private p = new Subject<number>();
  p$: Observable<any> = this.p.asObservable();

  constructor() { }

  startOrder() {
    this.burgerStack.splice(1,0,...this.allTypes)
                         
    this.totalPrice = 7.50;
    this.priceEmitter.emit(this.totalPrice);
   // this.stackEmitter.emit(this.burgerStack);
    //this.p.next(this.totalPrice)
  }

  addIngredient(ingredient: Ingredient) {
    
    this.burgerStack.splice( this.burgerStack.length-1, 0,ingredient);
    this.totalPrice += ingredient.price;
    this.priceEmitter.emit(this.totalPrice);
  }

  deleteIngredient(ingredient: Ingredient) {

    this.burgerStack.splice(this.burgerStack.indexOf(ingredient), 1)
    this.stackEmitter.emit(this.burgerStack);

    this.totalPrice -= ingredient.price;
    this.priceEmitter.emit(this.totalPrice);
  }

  clearOrder() {
    this.burgerStack = [new Ingredient("Burger Bread", 1.00), new Ingredient("Burger Bread", 1.00)];
    this.stackEmitter.emit(this.burgerStack);
    this.totalPrice = 2.00;
    this.priceEmitter.emit(this.totalPrice);
  }

}

