import React from "react";
import { Form } from "react-bootstrap";

export const bolsaTrabajo = () => {
  return (
    <>
      <img
        src="/img/bolsaTrabajo/bolsa_portada.jpg"
        style={{ width: "100%" }}
        alt=""
      />
      <div className="container">
        <div className="row section" style={{ paddingBottom: 80 }}>
          <div className="col-6">
            <div className="d-flex bloquePadre">
              <div className="d-flex leftBlock" style={{ flexFlow: "column" }}>
                <div className="bloqueIndex">
                  <h4> Project Manajer </h4>
                </div>
                <div
                  className="textBlock"
                  style={{ fontSize: "inherit", fontSize: 20 }}
                >
                  Lograr el manejo eficiente de todos los recursos humanos,
                  materiales y de infraestructura a fin de mantener la mejora
                  continua en los procesos, planear, organizar, dirigir y
                  controlar los procesos de operación de acuerdo con los
                  objetivos y metas determinadas.
                  <br />
                  <br />
                  
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-lg-6 imgServicios"
            style={{ paddingTop: 0 }}
          >
            <img
              src="/img/bolsaTrabajo/trabaja_con_nosotros1.png"
              style={{ maxHeight: 300 }}
              alt=""
            />
          </div>
        </div>
        <div className="row" style={{ paddingBottom: 80 }}>
          <div className="col-6">
            <div className="d-flex bloquePadre">
              <div className="d-flex leftBlock" style={{ flexFlow: "column" }}>
                <div className="bloqueIndex">
                  <h4> Dispatcher </h4>
                </div>
                <div
                  className="textBlock"
                  style={{ fontSize: "inherit", fontSize: 20 }}
                >
                  Coordinar de manera oportuna a los ingenieros de campo/sitio
                  así como a los CAS para que la atención sea llevada a cabo de
                  acuerdo a los requerimientos del cliente y se pueda mantener
                  un alto nivel de servicio.
                  <br />
                  <br />
                  
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-lg-6 imgServicios"
            style={{ paddingTop: 0 }}
          >
            <img
              src="/img/bolsaTrabajo/trabaja_con_nosotros2.png"
              style={{ maxHeight: 300 }}
              alt=""
            />
          </div>
        </div>
        <div className="row" style={{ paddingBottom: 80 }}>
          <div
            className="col-sm-12 col-lg-6 imgServicios"
            style={{ paddingTop: 0 }}
          >
            <img
              src="/img/bolsaTrabajo/trabaja_con_nosotros3.png"
              style={{ maxHeight: 300 }}
              alt=""
            />
          </div>
          <div className="col-6">
            <div className="d-flex bloquePadre">
              <div className="d-flex leftBlock" style={{ flexFlow: "column" }}>
                <div className="bloqueIndex">
                  <h4> Ingeniero de Campo/Sitio </h4>
                </div>
                <div
                  className="textBlock"
                  style={{ fontSize: "inherit", fontSize: 20 }}
                >
                  Proporcionar la atención de servicios hacia los clientes
                  internos y externos de manera oportuna y expedita para poder
                  mantener un alto nivel de servicio así como mantenerse
                  actualizado realizando sus certificaciones de acuerdo a los
                  avances
                  <br />
                  <br />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-sm-12 col-lg-6 imgServicios"
            style={{ paddingTop: 0 }}
          >
            <img
              src="/img/bolsaTrabajo/trabaja_con_nosotros4.png"
              style={{ maxHeight: 300 }}
              alt=""
            />
          </div>
          <div className="col-6">
            <div className="d-flex bloquePadre">
              <div className="d-flex leftBlock" style={{ flexFlow: "column" }}>
                <div className="bloqueIndex">
                  <h4> Agente de Service Desk Bilingüe IT </h4>
                </div>
                <div
                  className="textBlock"
                  style={{ fontSize: "inherit", fontSize: 20 }}
                >
                  Levantar tickets de los usuarios que se atiendan dentro del
                  SLA de respuesta que se tiene con el cliente así como dar
                  seguimiento, soluciones y respuestas correctas a las
                  escalaciones previstas para el Service Desk.
                  <br />
                  <br />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          className="section section-lg bg-transparent text-center novi-background"
          style={{ paddingTop: "0px !important", paddingBottom: 80 }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6">
                <h1 style={{ color: "#19679e" }} >Califica para una posición</h1>
                <br />
                <br />
                <Form.Group>
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        id="input-styles2"
                        type="text"
                        placeholder="Nombre"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        id="input-styles2"
                        type="email"
                        placeholder="Correo electronico"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        id="input-styles2"
                        type="pais"
                        placeholder="Pais de residencia"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        id="input-styles2"
                        type="localidad"
                        placeholder="Localidad de residencia"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        id="input-styles2"
                        type="localidad"
                        placeholder="Puesto que desea desempeñar"
                      />
                    </div>
                    <div className="col-lg-6">
                      <button className="btn btn-secondary">Cargar CV</button>
                    </div>
                  </div>
                  <br />
                  <div className="position-relative text-center formInput" style={{ marginTop: 22 }}>
                    <button className="btn btn-primary">Enviar</button>
                  </div>
                </Form.Group>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
