/**
 * Created by a548159 on 1/16/16.
 */
/**
 * Created by a548159 on 1/15/16.
 */
import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'todo-item-renderer',
    template: `
    <style>
        .completed {
            text-decoration: line-through;
        }
    </style>
    <div>
        <span [ngClass]="todo.status">{{todo.title}}</span>
        <button (click)="toggle.emit(todo)">Toggle</button>
    </div>`
})
export class TodoItemRenderer {
    @Input() todo;
    @Output() toggle = new EventEmitter();
}