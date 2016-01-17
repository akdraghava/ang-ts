/**
 * Created by a548159 on 1/15/16.
 */
import {Component, View} from 'angular2/core';
import {TodoService} from '../../services/todo-service';
import {TodoModel} from '../../models/todos/todo-model';

@Component({
    selector: 'todo-input',
    templateUrl: '/app/templates/todos/todo-input.html'
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