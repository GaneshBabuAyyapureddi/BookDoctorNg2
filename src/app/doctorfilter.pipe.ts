import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doctorfilter'
})
export class DoctorfilterPipe implements PipeTransform {

  transform(doctorsListArray: any[], speciali: string): any {
    debugger;
    if (speciali === undefined ) { return doctorsListArray; }
    // return doctorsListArray.filter(function (doctor) {
    //    doctor.speciality.toLowerCase().includes(speciali.toLowerCase());
       return speciali ? doctorsListArray.filter((product) =>
            product.speciality.toLocaleLowerCase().indexOf(speciali) !== -1) : doctorsListArray;
      // doctor.speciality.includes(speciali);
      // product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }

}
