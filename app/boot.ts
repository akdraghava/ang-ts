/**
 * Created by a548159 on 1/15/16.
 */
import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './components/app.component'
import {TodoService} from './services/todo-service'

bootstrap(AppComponent, [TodoService]);