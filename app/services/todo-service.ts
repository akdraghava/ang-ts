/**
 * Created by a548159 on 1/15/16.
 */
import {Injectable} from 'angular2/core';
import {TodoModel} from '../models/todos/todo-model';
@Injectable()
export class TodoService {
    todos = [
        new TodoModel('eat'),
        new TodoModel('sleep'),
        new TodoModel('code')
    ];

    addTodo(todo:TodoModel){
        this.todos = [...this.todos, todo];
    }

    toggleTodo(todo:TodoModel) {
        const i = this.todos.indexOf(todo);
        const status = todo.status === 'started' ? 'completed' : 'started';
        const toggledTodo = Object.assign({}, todo, {status});
        this.todos = [
            ...this.todos.slice(0, i),
            toggledTodo,
            ...this.todos.slice(i+1)
        ]
    }

}