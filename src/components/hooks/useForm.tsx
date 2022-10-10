import { useState } from "react";
export const useForm = <T extends object>(formulario: T) => {

    const [ state, setState ] = useState({
        email: 'CorreoInstitucional@ittepic.edu.mx',
        password: 'ContraseñaPrueba'
    })

    //const onChange = (value:string, campo:string) => {
        const onChange = (value:string, campo: keyof T) => {
        //Llamado a la función que cambia el useState
        setState({
            //Desestructuramos los valores
            ...state,
            [campo]: value
        });
    }

    return {
        ...state,
        formulario: state,
        onChange
    }
}