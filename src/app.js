import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'hello-app'
})

@View({
  template: '<p>{{ message }}</p>'
})

class HelloApp {
  constructor() {
    this.message = "Hola DevFest!";
  }
}

bootstrap(HelloApp, []);
