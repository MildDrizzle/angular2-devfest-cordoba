import 'zone.js/lib/browser/zone-microtask';
import 'reflect-metadata';
import 'babel-core/polyfill';

import {
  Component, View,
  provide, bootstrap
} from 'angular2/angular2';
import {
  Router, RouteConfig, RouteParams,
  LocationStrategy, HashLocationStrategy,
  ROUTER_PROVIDERS, ROUTER_DIRECTIVES, ROUTER_PRIMARY_COMPONENT
} from 'angular2/router';

import { Saludo } from './services';

// -- <hello> Component --------------------------------------------------------
@Component({
  selector: 'hello'
})
@View({
  template: '<p>{{ message }}</p>'
})
class Hello {
  constructor(saludo: Saludo) {
    //this.message = `Hola GDG #DevFestCordoba!`;
    this.message = saludo.texto('Hola', 'GDGCordoba');
  }
}

// <hello-name> Component --------------------------------------------------
@Component({
  selector: 'hello-name'
})
@View({
  template: '<p>{{ message }}</p>'
})
class HelloName {
  constructor(saludo: Saludo, routeParams: RouteParams) {
    //this.message = `Hola ${routeParams.get('name')}!`;
    this.message = saludo.texto('Hello', routeParams.get('name'));
  }
}

// -- <hello-app> Component ----------------------------------------------------
@Component({
  selector: 'hello-app',
  viewProviders: [Saludo]
})
@View({
  directives: [ROUTER_DIRECTIVES],
  template: `
    <ul>
      <li><a [router-link]="['/Hello']">Home</a></li>
      <li><a [router-link]="['/HelloName', { name: 'Carlos'}]">Home con Nombre</a></li>
    </ul>
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
  { path: '/', component: Hello, as: 'Hello' },
  { path: '/hola/:name', component: HelloName, as: 'HelloName'}
])
class HelloApp {

}


// -- Bootstrap App ------------------------------------------------------------
bootstrap(HelloApp, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  provide(ROUTER_PRIMARY_COMPONENT, { useValue: HelloApp })
]);
