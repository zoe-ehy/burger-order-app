import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { BurgerService } from '../burger.service';

@Component({
  selector: 'app-order-menu',
  templateUrl: './order-menu.component.html',
  styleUrls: ['./order-menu.component.css']
})
export class OrderMenuComponent implements OnInit {
  allTypes: Ingredient[];

  constructor(private burgerService: BurgerService) { }

  ngOnInit(): void {
    this.allTypes = this.burgerService.allTypes;
    console.log(this.allTypes);
  }

}
