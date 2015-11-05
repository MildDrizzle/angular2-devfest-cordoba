import 'zone.js/lib/browser/zone-microtask';
import 'reflect-metadata';
import 'babel-core/polyfill';

import {
  Component, View, Attribute,
  provide, bootstrap
} from 'angular2/angular2';
import {
  Router, RouteConfig, RouteParams,
  LocationStrategy, HashLocationStrategy,
  ROUTER_PROVIDERS, ROUTER_DIRECTIVES, ROUTER_PRIMARY_COMPONENT
} from 'angular2/router';

// -- <hello> Component --------------------------------------------------------
@Component({
  selector: 'hello'
})
@View({
  template: '<p>{{ message }}</p>'
})
class Hello {
  constructor() {
    this.message = "Hola GDG #DevFestCordoba!";
  }
}

// -- <hello-app> Component ----------------------------------------------------
@Component({
  selector: 'hello-app'
})
@View({
  directives: [ROUTER_DIRECTIVES],
  template: `<router-outlet></router-outlet>`
})
@RouteConfig([
  { path: '/', component: Hello, as: 'Hello' }
])
class HelloApp {
  
}


// -- Bootstrap App ------------------------------------------------------------
bootstrap(HelloApp, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  provide(ROUTER_PRIMARY_COMPONENT, { useValue: HelloApp })
]);
