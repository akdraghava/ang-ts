/**
 * Created by a548159 on 1/16/16.
 */
/**
 * Created by a548159 on 1/15/16.
 */
import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'search-filter',
    templateUrl: '/app/templates/filters/search.html'
})
export class SearchFilter {
    @Output() search = new EventEmitter();
    ngOnInit() {
        this.search.emit('');
    }
}