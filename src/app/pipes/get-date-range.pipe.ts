import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'getDateRange'
})
export class GetDateRangePipe implements PipeTransform {

  transform(obj : {startDate : string, endDate? : string}) : string {
    return `${obj.startDate} - ${obj.endDate || 'Present'}`;
  }

}
