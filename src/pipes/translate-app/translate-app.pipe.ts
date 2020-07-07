import { Pipe, PipeTransform } from '@angular/core';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';

@Pipe({
  name: 'translate'
})
export class TranslateAppPipe implements PipeTransform {

  constructor(public shared: SharedDataService) {

  }
  transform(value: string) {
    //console.log(value + " " + this.shared.translationListArray[value.toString()]);
    if (this.shared.translationListArray[value] == undefined) return value;
    return this.shared.translationListArray[value];
  }

}
