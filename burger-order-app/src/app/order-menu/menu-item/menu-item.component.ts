import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../ingredient.model'
import { BurgerService } from 'src/app/burger.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})

export class MenuItemComponent implements OnInit {
  @Input() ingredient: Ingredient;
  amount = 1;

  constructor(private burgerService: BurgerService) { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    if (this.amount < 3) {
      this.burgerService.addIngredient(this.ingredient);
      this.amount++;
    } 
    
  }

  onDeleteIngredient(){
    if (this.amount > 0) {
      this.burgerService.deleteIngredient(this.ingredient);
      this.amount--;
    }
  }

  onKey(event) {
    if (event.key < 4 && event.key > -1) {
      let difference = this.amount - event.key;

      if (difference > 0) {
        for (let i = 0; i < difference; i++) {
          this.burgerService.deleteIngredient(this.ingredient);
      this.amount--;
          console.log(this.burgerService.burgerStack);
        }
        
      } else {
        for (let i = 0; i < (difference*-1); i++) {
          this.burgerService.addIngredient(this.ingredient);
          this.amount++;
        }
      }
    }
  }

}
