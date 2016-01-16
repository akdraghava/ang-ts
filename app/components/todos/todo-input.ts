/**
 * Created by a548159 on 1/15/16.
 */
import {Component} from 'angular2/core';
import {TodoService} from '../../services/todo-service';
import {TodoModel} from '../../models/todos/todo-model';

@Component({
    selector: 'todo-input',
    template: `<div>
    <form (submit)="onSubmit()">
    <input type="text" [(ngModel)]="todoModel.title">
    </form>
    </div>`
})
export class TodoInput {
    todoModel: TodoModel = new TodoModel();
    constructor(public todoService: TodoService) {
    }

    onSubmit() {
        this.todoService.addTodo(this.todoModel);
        this.todoModel = new TodoModel();
    }
}