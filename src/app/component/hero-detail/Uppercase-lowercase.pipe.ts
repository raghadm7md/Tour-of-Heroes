import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capital",
})
export class UppercaseLowercasePipe implements PipeTransform {
  transform(value: any) {
    let newValue = "";
    for (let i = 0; i < value.length;i++) {
      let letters = value.charAt(i)
      newValue+=i % 2 == 0 ? letters.toUpperCase() : letters.toLowerCase();
    }
    return newValue
  }
}
