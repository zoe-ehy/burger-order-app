import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Ingredient } from '../../ingredient.model'
import { BurgerService } from 'src/app/burger.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})

export class MenuItemComponent implements OnInit {

  userAmount = new FormControl(1, [Validators.required, Validators.min(0), Validators.max(3), this.invalidInput.bind(this)]);

  @Input() ingredient: Ingredient;
  amount = 1;


  constructor(private burgerService: BurgerService) { }

  ngOnInit(): void {
  }

  onType(event) {
    this.userAmount.setValue(event.key)
    if (event.key >=0 && event.key <=3) {
      
      let difference = this.amount  - this.userAmount.value;

      if (difference > 0) {
        for (let i = 0; i < difference; i++) {

          this.burgerService.deleteIngredient(this.ingredient);
          this.amount--
          console.log(this.burgerService.burgerStack)
        }

      } else {
        for (let i = 0; i < (difference*-1); i++) {
          this.burgerService.addIngredient(this.ingredient);
          this.amount++
          console.log(this.burgerService.burgerStack)

        }
      }
    }
  }

  invalidInput(control: FormControl) {
    if (control.value == null) {
      return {"invalidInput": true};
    }
    else if (control.value >=0 && control.value <=3) {
      return null;
    } 
  }

  onIncrement() {
    if (this.userAmount.value < 3) {
      this.userAmount.setValue(this.userAmount.value + 1);
      this.burgerService.addIngredient(this.ingredient);
    }
  }

  onDecrement() {
    if (this.userAmount.value > 0) {
      this.userAmount.setValue(this.userAmount.value - 1);
      this.burgerService.deleteIngredient(this.ingredient);
    }
  }

}
