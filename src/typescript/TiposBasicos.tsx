import React from 'react'
export const TiposBasicos = () => {
let FicIdNombre: string | number = "Frank";
FicIdNombre = 17401014;
const FicNombre: string = "Victor Manuel";
const FicApellidos: string = "Martinez Valenzuela"
const FicNumControl: number = 1740;
const FicNumControl2 = 1014;
const FicFechaReg: Date = new Date();
let FicExperiencia = 20;
let FicActivo: boolean = true;
FicExperiencia = 25;
let FicPasaTiempos = [];
FicPasaTiempos.push(706);
FicPasaTiempos.push(true);
FicPasaTiempos.push('Dibujar');
    return (
        <>
          <h3>Tipos Básicos</h3> 
          Alias: {FicIdNombre}, <br></br>
          Nombres: {FicNombre}, <br></br>
          Apellidos: {FicApellidos}, <br></br>
          No.Ctrl1: {FicNumControl}, <br></br>
          No.Ctrl2: {FicNumControl2}, <br></br>
          Fecha de Registro: {FicFechaReg.toString()}, <br></br>
          Años de Experiencia: {FicExperiencia}, <br></br>
          Estatus: {(FicActivo) ? 'Activo' : 'No Activo'}, <br></br>
          PasaTiempos: {FicPasaTiempos[0]},
                       {(FicPasaTiempos[1]) ? 'Activo' : 'No Activo'},
                       {FicPasaTiempos[2]}
        </>
    )
}