import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  employee = [
    {name:'ali',gender:'male',age:'22'},
    {name:'ahmed',gender:'male',age:'23'},
    {name:'bibi',gender:'female',age:'24'},
    {name:'javed',gender:'male',age:'24'},
    {name:'asif',gender:'male',age:'27'},
  ]
}
