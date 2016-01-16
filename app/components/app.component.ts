/**
 * Created by a548159 on 1/15/16.
 */
import {Component} from 'angular2/core';
import {TodoInput} from './todos/todo-input';
import {TodoList} from './todos/todo-list';
import {StatusFilter} from './filters/status-filter';
import {SearchFilter} from './filters/search-filter';

@Component({
    selector: 'my-app',
    directives: [TodoInput, TodoList, StatusFilter, SearchFilter],
    template: `<div>
    <search-filter (search)="term = $event"></search-filter>
    <todo-input></todo-input>
    <status-filter (select)="status = $event"></status-filter>
    <todo-list
        [status]="status"
        [term]="term"
    ></todo-list>
    </div>
    <p><strong></strong></p>`
})
export class AppComponent { }
