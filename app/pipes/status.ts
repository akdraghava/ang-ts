/**
 * Created by a548159 on 1/16/16.
 */
import {Pipe} from 'angular2/core';

@Pipe({
    name: 'status'
})

export class StatusPipe{
    transform(value, [status]) {
        return value.filter((item)=> status == 'all' ? true : item.status === status);
    }
}