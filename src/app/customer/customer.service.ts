import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

const URL_CUSTOMER = 'app/customers.json';

@Injectable()
export class CustomerService {
    constructor( private _http : Http) { }

    getCustomers() {
        return this._http.get(URL_CUSTOMER)
        .map((response : Response) =>  response.json())
        .toPromise()
        .catch( (err: any ) => {
            console.log(err); // customize me please. 
            return Promise.reject(err);
        });
    }

    getCustomers_RxObservable() {
        return this._http.get(URL_CUSTOMER)
        .map((response : Response) =>  response.json())
        .catch( this._handleError );
    }
    
    _handleError(err: any) {
        console.log(err); // log this somewhere and format the message well for devs
        return Observable // our opportunity customize this error
    }
    

}