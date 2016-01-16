/**
 * Created by a548159 on 1/16/16.
 */
import {Pipe} from 'angular2/core';

@Pipe({
    name: 'search'
})

export class SearchPipe{
    transform(value, [term]) {
        return value.filter((item)=> item.title.startsWith(term));
    }
}