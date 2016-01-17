/**
 * Created by a548159 on 1/15/16.
 */
import {Component, Input} from 'angular2/core';
import {TodoService} from '../../services/todo-service';
import {TodoItemRenderer} from './todo-item-renderer';
import {SearchPipe} from '../../pipes/search';
import {StatusPipe} from '../../pipes/status';

@Component({
    selector: 'todo-list',
    pipes: [SearchPipe, StatusPipe],
    directives: [TodoItemRenderer],
    templateUrl: '/app/templates/todos/todo-list.html'
})
export class TodoList {
    @Input() status;
    @Input() term;
    constructor(public todoService: TodoService) {

    }

}