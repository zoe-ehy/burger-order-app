import { Component, OnInit } from '@angular/core';
import { BurgerService} from '../burger.service';


@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {
  ingredients = [];
  
  totalPrice = 0.00;

  constructor(private burgerService: BurgerService) { }

  ngOnInit(): void {
    this.ingredients = this.burgerService.burgerStack;
    this.totalPrice = this.burgerService.totalPrice;

    this.burgerService.priceEmitter.subscribe(newPrice =>this.totalPrice = newPrice);
    this.burgerService.stackEmitter.subscribe(newStack =>this.ingredients = newStack);
  }



}
