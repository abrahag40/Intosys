import React from "react";
import "../blurb.css";
import {
  BrowserRouter as Router,
  useHistory 
} from "react-router-dom";
import { Noticias } from "./Noticias";

export const Inicio = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/Noticias");
  }

  return (
    <>
    <Router>
      <img
        src="/img/inicio/inicio_portada.png"
        style={{ width: "100%" }}
        alt=""
      />
      <div className="container" style={{ paddingBottom: 80 }}>
        <div className="row">
          <div className="col 12"></div>
        </div>
        <div className="row section">
          <div className="col-6 ">
            <div className="d-flex bloquePadre">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/img/inicio/escritorio/por_que_elegirnos.png"
                  style={{ maxWidth: 80 }}
                  className="imgIndex"
                  alt=""
                />
              </div>
              <div className="d-flex leftBlock" style={{ flexFlow: "column" }}>
                <div className="bloqueIndex">
                  {" "}
                  <h4> Porque Elegir a Intosys </h4>{" "}
                </div>
                <div className="textBlock" style={{ fontSize: "inherit" }}>
                En Intosys entregamos servicios bajo la norma de calidad ISO 20000, nuestros proyectos se
administran bajo las mejores prácticas de ITIL.
                </div>
              </div>
            </div>
            <div className="d-flex bloquePadre">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/img/inicio/escritorio/latam.png"
                  style={{ maxWidth: 80 }}
                  className="imgIndex"
                  alt=""
                />
              </div>
              <div className="d-flex leftBlock" style={{ flexFlow: "column" }}>
                <div className="bloqueIndex">
                  <h4>Servicio, Calidad y Cobertura </h4>
                </div>
                <div className="textBlock" style={{ fontSize: "inherit" }}>
                En Intosys somos un solo punto de contacto para Servicios de Tecnologías de la Información en
todo el territorio de América Latina, la Zona del Caribe; EEUU y Canadá.
                </div>
              </div>
            </div>
            <div className="d-flex bloquePadre">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/img/inicio/escritorio/ti.png"
                  style={{ maxWidth: 80 }}
                  className="imgIndex"
                  alt=""
                />
              </div>
              <div className="d-flex leftBlock" style={{ flexFlow: "column" }}>
                <div className="bloqueIndex">
                  <h4> Amplio Portafolio de Servicios de TI </h4>
                </div>
                <div className="textBlock" style={{ fontSize: "inherit" }}>
                En Intosys contamos con un amplio portafolio de servicio de Tecnologías de la Información para
Data Center, Cómputo de Usuario Final y Outsourcing de Personal.
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-6"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src="/img/inicio/inicio1.jpg" height="550px" alt="" />
          </div>
        </div>
        <div className="row">
          <div
            className="col-6"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src="/img/inicio/inicio2.png" height="550px" alt="" />
          </div>
          <div className="col-6 ">
            <div className="d-flex bloquePadre">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/img/inicio/escritorio/bloque_4.png"
                  style={{ maxWidth: 80 }}
                  className="imgIndex"
                  alt=""
                />
              </div>
              <div className="d-flex leftBlock" style={{ flexFlow: "column" }}>
                <div className="bloqueIndex">
                  <h4> Flexible Modelo de Servicios Integrales. </h4>
                </div>
                <div className="textBlock" style={{ fontSize: "inherit" }}>
                En Intosys proveemos soluciones completas de Servicios de Tecnologías de la Información,
totalmente flexibles, contemplando personal técnico dedicado o por evento y logística de partes
nacional e internacional.
                </div>
              </div>
            </div>
            <div className="d-flex bloquePadre">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/img/inicio/escritorio/bloque_5.png"
                  style={{ maxWidth: 80 }}
                  className="imgIndex"
                  alt=""
                />
              </div>
              <div className="d-flex leftBlock" style={{ flexFlow: "column" }}>
                <div className="bloqueIndex">
                  {" "}
                  <h4> Nuestros Clientes. </h4>
                </div>
                <div className="textBlock" style={{ fontSize: "inherit" }}>
                En Intosys proveemos servicios de Tecnologías de la Información exclusivamente para Fabricantes
de Tecnología, Globalizadores Mundiales de Servicio y Grandes Distribuidores de Productos de
Tecnologías de la Información.
                </div>
              </div>
            </div>
            <div className="d-flex bloquePadre">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/img/inicio/escritorio/bloque_6.png"
                  style={{ maxWidth: 80 }}
                  className="imgIndex"
                  alt=""
                />
              </div>
              <div className="d-flex leftBlock" style={{ flexFlow: "column" }}>
                <div className="bloqueIndex">
                  <h4> Mejora Continua y Nueva Normalidad. </h4>
                </div>
                <div className="textBlock" style={{ fontSize: "inherit" }}>
                En Intosys, escuchando a nuestros clientes, mejoramos cada día y estamos preparados para la
nueva normalidad.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div>
            <div className="row">
              <div className="col-sm-6">
                <div className="container content-row-area animated">
                  <h1
                    className="text-center text-md-left animated fadeInUp covid"
                    style={{ borderBottom: "solid 5px #19679e" }}
                  >
                    COVID-19 una nueva normalidad
                  </h1>
                  <div
                    className="content-row content-row-max-width animated fadeInUp"
                    data-animate='{"class":"fadeInUp"}'
                    style={{ marginTop: 45 }}
                  >
                    <div className="content-row-item content-row-body">
                      <div className="textBlock">
                        Conoce las medidas de Sanidad que fomentamos en nuestros
                        empleados.
                      </div>
                      <div className="textBlock">
                        Estamos operando bajo la nueva normalidad, respetamos
                        las leyes, todos nuestros procesos de servicio cuentan
                        con medidas preventivas que minimizan los riesgos de
                        contagio.
                      </div>
                      <div className="textBlock">
                        Nuestros colaboradores cuentan con suministros
                        sanitizantes disponibles 7x24 a nivel regional y están
                        soportados por un Protocolo de Manejo de Riesgos de <span style={{ cursor: 'pointer', color:'#007bff' }} onClick={handleClick}> COVID-19. </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-6"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src="/img/inicio/inicio3.png" height="430px" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </Router>
    </>
  );
};
