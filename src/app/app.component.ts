import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  { 
  // [ ] means property binding - C to D
  // ( ) means event binding - D to C
  title = 'Eric\'s Angular 2 App';
  name = 'Bob'; 
  ericsColor = 'green';
  customers = [
    { id: 1, name: 'Eric' },
    { id: 2, name: 'Jake' },
    { id: 3, name: 'Phillip' },
    { id: 4, name: 'Sally' },
    { id: 5, name: 'John' },
  ];

  changeTextColor() {
    this.ericsColor = this.ericsColor === 'green' ? 'red' : 'green';
  }

}
