/**
 * Created by a548159 on 1/15/16.
 */
import {bootstrap}    from 'angular2/platform/browser';
import {provide}    from 'angular2/core';
import {ROUTER_PROVIDERS, Location, APP_BASE_HREF} from 'angular2/router';

import {AppComponent} from './components/app.component';
import {TodoService} from './services/todo-service';

bootstrap(AppComponent, [TodoService, ROUTER_PROVIDERS, provide(APP_BASE_HREF, {useValue: '/'})]);