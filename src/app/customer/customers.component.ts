import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-customers',
    templateUrl: '/app/customer/customers.component.html',
    providers : [CustomerService]
})
export class CustomersComponent implements OnInit {
    
    myColor = 'grey';
    customers: Observable<Customer[]>;

    // shortcut in typescrip to create a private customer service object
    constructor( private _customerService: CustomerService ) {}

    ngOnInit() {
        // better here for setsting 
        this.customers = this._customerService.getCustomers()
            .catch((err) => {
                console.log(err); // dont do this. Show user a nice message.
                return Observable.of(true); 
                // mow we eeat it, but only if the message 
                // has been communicated to the user
             } );
    }
}