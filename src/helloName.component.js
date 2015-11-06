import {Component, View} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';
import {Saludo} from './services';

// <hello-name> Component --------------------------------------------------
@Component({
  selector: 'hello-name'
})
@View({
  template: '<p>{{ message }}</p>'
})
export class HelloName {
  constructor(saludo: Saludo, routeParams: RouteParams) {
    //this.message = `Hola ${routeParams.get('name')}!`;
    this.message = saludo.texto('Hello', routeParams.get('name'));
  }
}
