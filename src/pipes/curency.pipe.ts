import { Pipe, PipeTransform } from '@angular/core';
import * as $ from "jquery";
@Pipe({
  name: 'curency'
})
export class CurencyPipe implements PipeTransform {

  currency = $('<textarea />').html(localStorage.currency).text();

  position = localStorage.currencyPos;
  decimal = localStorage.decimals;
  constructor() {
  }

  transform(value) {

    let v = parseFloat(value).toFixed(this.decimal);
    if (v.toString() == 'NaN') {

      if (this.position == 'left')
        return this.currency + "" + value;
      else
        return value + " " + this.currency;
    }
    else {
      if (this.position == 'left')
        return this.currency + "" + v;
      else
        return v + " " + this.currency;
    }
  }

}
