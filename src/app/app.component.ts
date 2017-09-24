import { Component } from '@angular/core';

//import { CustomerService } from './customer/customer.service';
//import { CustomersComponent } from './customer/customers.component'

// here is the customer barrell, 
// in the future you will be able to run ./customer and it will find index
import { CustomerComponent, CustomerService } from './customer/index'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [CustomerService]
})
export class AppComponent  { 
  // [ ] means property binding - C to D
  // ( ) means event binding - D to C
  title = 'Eric\'s Angular 2 App';
  name = 'Bob'; 
  ericsColor = 'green';


  changeTextColor() {
    this.ericsColor = this.ericsColor === 'green' ? 'red' : 'green';
  }

}
