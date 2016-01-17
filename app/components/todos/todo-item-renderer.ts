/**
 * Created by a548159 on 1/16/16.
 */
/**
 * Created by a548159 on 1/15/16.
 */
import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'todo-item-renderer',
    templateUrl: '/app/templates/todos/todo-item-renderer.html'
})
export class TodoItemRenderer {
    @Input() todo;
    @Output() toggle = new EventEmitter();
}