import {Component, View} from 'angular2/angular2';
import {Saludo} from './services';

// -- <hello> Component --------------------------------------------------------
@Component({
  selector: 'hello'
})
@View({
  template: '<p>{{ message }}</p>'
})
export class Hello {
  constructor(saludo: Saludo) {
    //this.message = `Hola GDG #DevFestCordoba!`;
    this.message = saludo.texto('Hola', 'GDGCordoba');
  }
}
