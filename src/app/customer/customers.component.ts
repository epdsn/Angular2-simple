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
    // customers: Observable<any[]>;
    customers: any[];

    // shortcut in typescrip to create a private customer service object
    constructor( private _customerService: CustomerService ) {}

    ngOnInit() {
        // Rx observable version with subscribe function to a customer array
        this._customerService.getCustomers_RxObservable()
        .subscribe(
            // it worked
            (customers) => this.customers = customers ,
            // error
            (err) => { console.log(err);}
            );


        // Straight up promise to array
        // this._customerService.getCustomers()
        //     .then((customers) => this.customers = customers )
        //     .catch((err) => {
        //         console.log(err); // dont do this. Show user a nice message.
        //      } );

        // Promise<any[]>
        // this.customers = this._customerService.getCustomers()
        //      .catch((err) => {
        //          console.log(err); // dont do this. Show user a nice message.
        //       } );

        //RXobservable version
             // this.customers = this._customerService.getCustomers_RxObservable()
        //     .catch((err) => {
        //         console.log(err); // dont do this. Show user a nice message.
        //         return Observable.of(true); 
        //         // mow we eeat it, but only if the message 
        //         // has been communicated to the user
        //     } );
    }
}