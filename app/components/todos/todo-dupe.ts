/**
 * Created by a548159 on 1/15/16.
 */
import {Component} from 'angular2/core';
import {TodoInput} from './todo-input';
import {TodoList} from './todo-list';
import {StatusFilter} from '../filters/status-filter';
import {SearchFilter} from '../filters/search-filter';

@Component({
    selector: 'dupetodo',
    directives: [TodoInput, TodoList, StatusFilter, SearchFilter],
    template: `<div>
            In progress
        </div>`
})
export class DupeTodoComponent { }
