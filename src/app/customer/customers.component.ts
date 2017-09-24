import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
 

@Component({
    selector: 'app-customers',
    templateUrl: '/app/customer/customers.component.html',
    providers : [CustomerService]
})
export class CustomersComponent implements OnInit {
    
    myColor = 'grey';
    customers: any[];

    // shortcut in typescrip to create a private customer service object
    constructor( private _customerService: CustomerService ) {}

    ngOnInit() {
        // better here for setsting 
        this.customers = this._customerService.getCustomers();
    }
}