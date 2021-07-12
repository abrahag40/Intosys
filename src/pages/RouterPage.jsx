import React from "react";
import { Inicio } from "./Inicio";
import { NuestraEmpresa } from "./NuestraEmpresa";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Servicios } from "./Servicios";
import { Comunidad } from "./Comunidad";
import { Contacto } from "./Contacto";
import { bolsaTrabajo } from "./bolsaTrabajo";
import { Noticias } from "./Noticias";

export const RouterPage = () => {
  return (
    <Router>
        <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{
          borderBottom: "solid 10px #19679e",
          borderTop: "solid 10px #19679e",
          padding: "10px 30px",
        }}
      >
        <a className="navbar-brand" href="#">
          <img src="/img/intosysLogo.png" style={{ width: 200 }} />
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/Inicio">
              Inicio
            </Link>
            <Link className="nav-item nav-link" to="/NuestraEmpresa">
              Nuestra Empresa
            </Link>
            <Link className="nav-item nav-link" to="/Servicios">
              Servicios y Cobertura Geográfica
            </Link>
            <Link className="nav-item nav-link" to="/NuestrosClientes">
              Nuestros Clientes
            </Link>
            <Link className="nav-item nav-link" to="/Noticias">
              Noticias
            </Link>
            <Link className="nav-item nav-link" to="/Bolsa">
              Bolsa
            </Link>
          </div>
        </div>
      <div className="d-flex" style={{ alignItems: 'center' }}>
          <Link className="nav-item nav-link" style={{ fontSize: 20 }} to="/Contacto">
            Contacto
          </Link>
          <div className="divBandera"><img className="bandera" src="img/banderas/bandera_br.jpg" alt=""/></div>
          <div className="divBandera"><img className="bandera" src="img/banderas/bandera_eu.jpg" alt=""/></div>
          <div className="divBandera"><img className="bandera" src="img/banderas/bandera_mx.jpg" alt=""/></div>
      </div>
      </nav>
      </div>
      <Switch>
        <Route exact path='/' component={Inicio} />
        <Route path="/Inicio" component={Inicio}></Route>
        <Route path="/NuestraEmpresa" component={NuestraEmpresa}></Route>
        <Route path="/Servicios" component={Servicios}></Route>
        <Route path="/NuestrosClientes" component={Comunidad}></Route>
        <Route path="/Contacto" component={Contacto}></Route>
        <Route path="/Comentarios"></Route>
        <Route path="/Noticias" component={Noticias}></Route>
        <Route path="/Bolsa" component={bolsaTrabajo}></Route>
        <Redirect to="/Inicio" />
      </Switch>
    </Router>
  );
};
