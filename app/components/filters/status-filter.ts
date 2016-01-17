/**
 * Created by a548159 on 1/16/16.
 */
/**
 * Created by a548159 on 1/15/16.
 */
import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'status-filter',
    templateUrl: '/app/templates/filters/status.html'
})
export class StatusFilter {
    @Output() select = new EventEmitter();
    ngOnInit() {
        this.select.emit('all');
    }
}