import React from 'react'
//import { ObjetosLiterales } from './typescript/ObjetosLiterales';
//import { TiposBasicos } from './typescript/TiposBasicos';
//import { Contador } from './components/Contador';
import { ContadorHook } from './components/ContadorHook';
const App = () => {
  return (
    <div>
      <h1>Introducción a TypeScript with React</h1>
      <hr />
      {/*<TiposBasicos></></TiposBasicos>*/}
      {/*<ObjetosLiterales/>*/}
      {/*<Contador/>*/}
      {<ContadorHook/>}
    </div>
  )
}
export default App;