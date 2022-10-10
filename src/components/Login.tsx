import { useEffect, useReducer } from "react";

interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type LoginPayLoad = {
    username: string,
    nombre: string
}
type AuthAction =
    | { type: 'logout'}
    | {type: 'login', payload: LoginPayLoad};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
        case 'login':
            const {nombre, username} = action.payload;
            return {
                validando: false,
                token: 'MITOKEN123456789',
                //username: action.payload.username,
                //nombre: action.payload.nombre,
                username,
                nombre,
            }
            break;
        default:
            return state;
            break;
    }
}

export const Login = () => {
    //const [{validando, token}, dispatch] = useReducer(authReducer, initialState)
    const [state, dispatch] = useReducer(authReducer, initialState)
   
    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                username: 'VictorMartinez',
                nombre: 'Victor'
            }
        })
    }

    const logout = () => {
        dispatch({
            type: 'logout'
        })
    }

    useEffect(() => {
        setTimeout(() => {
          dispatch({type:'logout'}) 
        }, 2500);
    }, []);

    //Si se agregara una dependencia 
    if (state.validando) {
        return (
        <>
            <h3>Login</h3>
                <div className="alert alert-info">
                    Validando Información...
                </div>   
        </>
        )
    }
    return (
        <>
            <h3>Login</h3>
            {
            (  state.token  )
                ? 
                (
                    <div className="alert alert-success">
                        Autenticado como: { state.nombre }
                    </div>
                )
                : 
                (   
                    <div className="alert alert-danger">
                        No Autenticado...
                    </div>
                )
            }
            {
                (state.token)
                ? (
                    <button
                        name="ficLogout_Button"
                        className ="btn btn-danger"
                        onClick={logout}
                    >
                        Logout 
                    </button>   
                )
                : (
                    <button
                        name="ficLogin_Button"
                        className ="btn btn-primary"
                        onClick={login}
                    >
                        Login   
                    </button>
                )
            }
        </>
    )
}