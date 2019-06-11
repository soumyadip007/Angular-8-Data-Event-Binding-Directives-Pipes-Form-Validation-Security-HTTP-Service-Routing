import { Pipe, PipeTransform} from '@angular/core';

@Pipe(
    {
        name:'custom'
    }
)
export class custom implements PipeTransform{

    transform(value:string, limit?:number)
    {
        if(!value)
            return null;

            let actualLimit= (limit) ? limit:50;
            return value.substr(0,actualLimit)+"........";
    }

}