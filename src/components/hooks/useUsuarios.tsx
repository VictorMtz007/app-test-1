import { useEffect, useRef, useState } from "react";
import { reqRespApi } from "../../api/reqRes";
import { ReqRespUsuarioListado, Usuario } from "../../interfaces/reqResp";

const [ usuarios, setUsuarios ] = useState<Usuario[]>([]);
    const ficRefPage = useRef(1);
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
            if ( resp.data.data.length > 0 ) {
                setUsuarios(resp.data.data);
                ficRefPage.current ++;
            }
            else {
                alert('No hay mas registros');
            }
        //Funciones
        const ficFnPaginaSiguiente = ()  => {
            ficRefPage.current ++;
            ficFnCargaUsuarios(); 
        }
        const ficFnPaginaAnterior = () => {
            if ( ficRefPage.current > 1 ){
                ficRefPage.current --;
                ficFnCargaUsuarios();
            } 
        }
        return{
            usuarios,
            //ficFnCargaUsuarios
            ficFnPaginaAnterior,
            ficFnPaginaSiguiente
        }
        })
        .catch(err => console.log(err))
    }