import { Pipe, PipeTransform } from '@angular/core';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en-US')

@Pipe({
  name: 'getTimeAgo'
})
export class GetTimeAgoPipe implements PipeTransform {
  transform(time: number): string {
    if(time > Date.now()){
      return  timeAgo.format(Date.now() +Date.now() - time, 'twitter');
    }else{
      return timeAgo.format(Date.now() +Date.now() - time, 'time') + ' delays';
    }
  }

}
