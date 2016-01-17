/**
 * Created by a548159 on 1/15/16.
 */
import {Component} from 'angular2/core';
import {TodoComponent} from './todos/todo';
import {DupeTodoComponent} from './todos/todo-dupe';
import {RouteConfig,  ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: '/app/templates/app.html'
})
@RouteConfig([
    {path: '/',        component: TodoComponent, as: 'Home'},
    {path: '/todo', component: DupeTodoComponent, as: 'Todo'  }
])

export class AppComponent { }
