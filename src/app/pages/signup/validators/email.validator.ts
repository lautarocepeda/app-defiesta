import { FormControl } from '@angular/forms';


export class EmailValidator
{


    // validamos el email con nuestra base de datos. Para verificar si ya existe una cuenta con ese email.
    static valid(fc: FormControl)
    {

        if (fc.value.toLowerCase() === 'asd@asd.com')
            return ( { alreadyEmail: true} );


        return null;
    }

}