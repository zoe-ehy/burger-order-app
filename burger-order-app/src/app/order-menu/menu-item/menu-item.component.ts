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

  constructor(private burgerService: BurgerService) { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    this.burgerService.addIngredient(this.ingredient);
  }

  onDeleteIngredient(){
    this.burgerService.deleteIngredient(this.ingredient);
  }

}
