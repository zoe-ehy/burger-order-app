import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BurgerService} from './burger.service';

import { AppComponent } from './app.component';
import { OrderMenuComponent } from './order-menu/order-menu.component';
import { BurgerComponent } from './burger/burger.component';
import { BurgerIngredientComponent } from './burger/burger-ingredient/burger-ingredient.component';
import { MenuItemComponent } from './order-menu/menu-item/menu-item.component';
  
@NgModule({
  declarations: [
    AppComponent,
    OrderMenuComponent,
    BurgerComponent,
    BurgerIngredientComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [BurgerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
