import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators{

    cannotContainSpace( control: AbstractControl) : ValidationErrors{

        if((control.value as string).indexOf(' ')>= 0)
        {
            return {cannotContainSpace: true}
        }
        return null;
    }
}