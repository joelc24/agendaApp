import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function correctLength(longitud: number): ValidatorFn{
    // Devuelve un validador que recibe un control
    return (control: AbstractControl): ValidationErrors | null => {
      // Obtiene el valor del control
      const valor = String(control.value);
      // Verifica si el valor tiene la longitud esperada
      if (valor && valor.length === longitud) {
        // Si es así, no hay error
        return null;
      } else {
        // Si no, devuelve un objeto con el error y el parámetro
        return { longitudInvalida: { valor, longitud } };
      }
    };
}