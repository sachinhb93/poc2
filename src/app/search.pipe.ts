import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    if(value.length===0){
      return value;
    }
    let users:any[]=[];

    for (let i = 0; i < value.length; i++) {
      // console.log(value[i].firstName)
      let firstName:string=value[i].firstName;
      let surName:string=value[i].surName;
      let pincode:string=value[i].pincode;
      if(firstName.toLowerCase().indexOf(searchTerm.toLowerCase())>-1){
        users.push(value[i]);
      }else if(value[i].surName.toLowerCase().indexOf(searchTerm.toLowerCase())>-1){
        users.push(value[i]);
      }else if(value[i].pincode.toLowerCase().indexOf(searchTerm.toLowerCase())>-1){
        users.push(value[i]);
      } 
    }
    return users;

    // return value.filter((search)=>{
    //   return search.name.toLowerCase().indexOf(searchTerm.toLowerCase())>-1;
    // })
  }

}
