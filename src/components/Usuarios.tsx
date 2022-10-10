import { useEffect, useState } from "react";
import { reqRespApi } from "../api/reqRes";
import { ReqRespUsuarioListado, Usuario } from "../interfaces/reqResp";
import { useRef } from "react";
//import { Usuario } from "../interfaces/reqResp";
//import { useUsuarios } from "./hooks/useUsuarios";

export const Usuarios = () => {
    
    //const { usuarios, ficFnPaginaAnterior, ficFnPaginaSiguiente } = useUsuarios();
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const ficRefPage = useRef(0);

    useEffect(() => {
        ficFnCargaUsuarios();
    }, []);

    const ficFnCargaUsuarios = async () => {
        
        const ficResponse = await
        reqRespApi.get<ReqRespUsuarioListado>('/users', {
            params: {
                page: ficRefPage.current
            }
        })
        .then(resp=> {
            if (resp.data.data.length > 0) {
                setUsuarios(resp.data.data);
                ficRefPage.current ++;
            }
            else {
                alert('No hay más registros');
            }
        })
        .catch(err => console.log(err))
    }

    const renderItem = (usuario: Usuario) => {
        return (
            <tr key={usuario.id.toString()}>
                <td>
                    <img
                        src={ usuario.avatar }
                        alt={ usuario.first_name }
                        style={{
                            width: 50,
                            borderRadius: 100
                        }}
                    >
                    </img>
                </td>
                <td>
                    { usuario.first_name } { usuario.last_name }
                </td>
                <td>
                    { usuario.email }
                </td>
            </tr>
        )
    }
    
    return (
        <>
            <h3>Usuarios</h3>
            <table className = "table">
                <thead>
                    <tr>
                        <th>
                            Avatar
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            email
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    usuarios.map(FicArgUsuario => renderItem(FicArgUsuario))
                }
                </tbody>
            </table>
            <button
                className="btn btn-primary"
                //onClick = { ficFnCargaUsuarios }
                //onClick = { ficFnPaginaAnterior }
            >
            Anterior       
            </button>
            &nbsp;           
            <button
                className="btn btn-primary"
                onClick= { ficFnCargaUsuarios }
                //onClick = { ficFnPaginaSiguiente }
                >
                Siguiente       
            </button>
        </>
    )
}