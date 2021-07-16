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
import { BolsaTrabajo } from "./bolsaTrabajo";
import { Noticias } from "./Noticias";
import { useTranslation } from 'react-i18next';

export const RouterPage = () => {

  const { t, i18n } = useTranslation();
    
  const lngs = {
    por: { nativeName: 'Portuguese' },
    es: { nativeName: 'Spanish' },
    en: { nativeName: 'English' },
  };

  const changeLocalLanguage = (lan) => {

    i18n.changeLanguage('fr');
    if (lan === '') {
    } else if (lan === '') {
      i18n.changeLanguage('en-US');
    } else {
      i18n.changeLanguage('en-US');
    }
  }

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
              {t('mennu_Inicio')}
            </Link>
            <Link className="nav-item nav-link" to="/NuestraEmpresa">
              {t('mennu_NuestraEmpresa')}
            </Link>
            <Link className="nav-item nav-link" to="/Servicios">
            {t('ServicesGeo_Technology')}
            </Link>
            <Link className="nav-item nav-link" to="/NuestrosClientes">
              {t('mennu_NuestrosClientes')}
            </Link>
            <Link className="nav-item nav-link" to="/Noticias">
              {t('mennu_Noticias')}
            </Link>
            <Link className="nav-item nav-link" to="/Bolsa">
              {t('mennu_Bolsa')}
            </Link>
          </div>
        </div>
      <div className="d-flex" style={{ alignItems: 'center' }}>
          <Link className="nav-item nav-link" style={{ fontSize: 20 }} to="/Contacto">
            {t('mennu_Contacto')}
          </Link>
          {Object.keys(lngs).map((lng) => {
            if (lng ==="en") {
              return <div className="divBandera" onClick={() => i18n.changeLanguage(lng)} ><img className="bandera" src="img/banderas/bandera_eu.jpg" alt=""/></div>
            } else if (lng ==="es"){
              return <div className="divBandera" onClick={() => i18n.changeLanguage(lng)} ><img className="bandera" src="img/banderas/bandera_mx.jpg" alt=""/></div>
            } else {
              return <div className="divBandera" onClick={() => i18n.changeLanguage(lng)} ><img className="bandera" src="img/banderas/bandera_br.jpg" alt=""/></div>
            }
          })}
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
        <Route path="/Bolsa" component={BolsaTrabajo}></Route>
        <Redirect to="/Inicio" />
      </Switch>
    </Router>
  );
};
