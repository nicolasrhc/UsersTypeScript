import React, { FC, Fragment, useCallback } from 'react';
import './App.css';
import {
  Switch,
  Route,
  Link,
  useParams,
  BrowserRouter
} from "react-router-dom";
import { checkPropTypes } from 'prop-types';

interface Usuario {
  id: number;
  nombre: string;
  edad: number;  
}

let usu1: Usuario = {
  id: 0,
  nombre: "usuario1",
  edad: 19
}

let usu2: Usuario = {
  id: 1,
  nombre: "usuario2",
  edad: 29
}

let usu3: Usuario = {
  id: 2,
  nombre: "usuario3",
  edad: 58
}

let arrayUsuarios: Usuario[] = [];
arrayUsuarios.push(usu1);
arrayUsuarios.push(usu2);
arrayUsuarios.push(usu3);


const Usuarios: FC<any> = () => {
  return(
  
      <div className="Usuarios">
        <ul>
          {arrayUsuarios.map((user, index) => (
            <li key={user.id}>
              <Link  to={`/usuarios/${user.id}`}>
                {user.nombre}
              </Link>
            </li>
          ))}
        </ul>
      </div>
  
  );
}

function UsuariosID(){
  let {id} = useParams();

  if(id===undefined){
    id = "0"
  }

  if(parseInt(id)>=arrayUsuarios.length){
    return(
      <h2>Usuario no encontrado en la base de datos</h2>
    );
  }else{
    return(
      <Fragment>
        <div className="Detalles">
          <h2>ID: {arrayUsuarios[parseInt(id)].id}</h2>
          <h2>Nombre: {arrayUsuarios[parseInt(id)].nombre}</h2>
          <h2>Edad: {arrayUsuarios[parseInt(id)].edad}</h2>
        </div>
      </Fragment>
    );
  }
}

interface props {
  botonUsuarios: boolean
  botonDetalles: boolean
}



export const Menu: FC<props> = (props) => {
  return(
  
      <div className="Menu">
        <nav>
          <ul>
            <li>
              <div className={props.botonUsuarios ? "BotonMenuPulsado" : "BotonMenuNo"}>
                <Link to='/usuarios'>
                  Usuarios
                </Link>
              </div> 
            </li>
            <li>
              <div className={props.botonDetalles ? "BotonMenuPulsado" : "BotonMenuNo"}>
                Detalle
              </div>
            </li>
          </ul>
        </nav>
      </div>
  );
}


const App: FC = () => {
  return (
    <div className="Pantalla">
      <BrowserRouter basename='/'>
        <Menu botonUsuarios={true} botonDetalles={true}/>
        <Switch>
            <Route path='/usuarios' exact>
              <Usuarios />
            </Route>
            <Route path='/usuarios/:id' exact>
              <UsuariosID />
            </Route>
      
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
