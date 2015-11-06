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

import { Hello } from './hello.component';
import { HelloName } from './helloName.component';
import { Saludo } from './services';

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
