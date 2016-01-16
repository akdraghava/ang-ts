/**
 * Created by a548159 on 1/16/16.
 */
/**
 * Created by a548159 on 1/15/16.
 */
import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'search-filter',
    template: `<div>
    search todo: <input type="text" #keyword (input)="search.emit(keyword.value)">
    </div>`
})
export class SearchFilter {
    @Output() search = new EventEmitter();
    ngOnInit() {
        this.search.emit('');
    }
}