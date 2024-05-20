import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shirtSize',
  standalone: true
})
export class ShirtSizePipe implements PipeTransform {

  transform(value: number, ): string {
    if(value >=0 && value <38){
      return 'Please drink boost or horlicks'
    }else if (value <= 39){
      return 'small';
    } else if(value > 39 && value<=40){
      return 'medium'
    }else if(value >40 && value <=42){
      return 'Large'
    }else if(value > 42 && value <=44){
      return 'XL'
    }else if(value >44 && value<=47){
      return 'XXL'
    }else{
      return 'Size not defined'
    }
  }

}
