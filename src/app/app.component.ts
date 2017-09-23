import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent  { 
  // [ ] means property binding - C to D
  // ( ) means event binding - D to C
  title = 'Eric\'s Angular 2 App';
  name = 'Bob'; 
  ericsColor = 'blue';

  changeTextColor() {
    this.ericsColor = this.ericsColor === 'blue' ? 'red' : 'blue';
  }

}
