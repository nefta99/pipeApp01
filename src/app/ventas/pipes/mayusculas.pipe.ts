import { Pipe, PipeTransform } from "@angular/core";


 
 @Pipe({
     name: 'mayusculas'
 })

 export class MayusculasPipe implements PipeTransform{
    transform(value : string ,enMayuscylas : boolean=true) : string{
        if(enMayuscylas===true){
            return value.toUpperCase();
        }
        else{
            return value.toLowerCase();
        }
    }
 }