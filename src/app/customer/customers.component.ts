import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-customers',
    templateUrl: '/app/customer/customers.component.html',
})
export class CustomersComponent implements OnInit {
    
    customers = [
        { id: 1, name: 'Eric' },
        { id: 2, name: 'Jake' },
        { id: 3, name: 'Phillip' },
        { id: 4, name: 'Sally' },
        { id: 5, name: 'John' },
      ];
    
    constructor() { }

    ngOnInit() { }
}