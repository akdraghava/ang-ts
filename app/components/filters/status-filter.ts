/**
 * Created by a548159 on 1/16/16.
 */
/**
 * Created by a548159 on 1/15/16.
 */
import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'status-filter',
    template: `<div>
    <a (click)="select.emit('all')">all</a>
    <a (click)="select.emit('started')">started</a>
    <a (click)="select.emit('completed')">completed</a>
    </div>`
})
export class StatusFilter {
    @Output() select = new EventEmitter();
    ngOnInit() {
        this.select.emit('all');
    }
}