import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

    
      constructor() {}

    getCustomers() {
        return  [
            { id: 1, name: 'Eric' },
            { id: 2, name: 'Jake' },
            { id: 3, name: 'Phillip' },
            { id: 4, name: 'Sally' },
            { id: 5, name: 'John' },
        ];
    }

}