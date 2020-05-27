import { Component } from '@angular/core';
import { BurgerService} from './burger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'burger-order-app';

  orderState = false;

  constructor(private burgerService: BurgerService) { }

  ngOnInit(): void {
  }

  onOrderState() {
    this.burgerService.startOrder();
    this.orderState = true;

  }

  onEmptyState() {
    this.burgerService.clearOrder();
    this.orderState = false;
  }
}
