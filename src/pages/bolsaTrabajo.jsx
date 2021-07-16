import React from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const BolsaTrabajo = () => {

  const { t, i18n } = useTranslation();

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
                  <h4> {t('Job_ProjectManager')} </h4>
                </div>
                <div
                  className="textBlock"
                  style={{ fontSize: "inherit", fontSize: 20 }}
                >
                  {t('Job_ProjectManagerTxt')}
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
                  {t('Job_DispatcherTxt')}
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
                  <h4> {t('Job_Field')} </h4>
                </div>
                <div
                  className="textBlock"
                  style={{ fontSize: "inherit", fontSize: 20 }}
                >
                  {t('Job_FieldTxt')}
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
                  <h4> {t('Job_BilingualIT')} </h4>
                </div>
                <div
                  className="textBlock"
                  style={{ fontSize: "inherit", fontSize: 20 }}
                >
                  {t('Job_BilingualITTxt')}
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
                <h1 style={{ color: "#19679e" }} >{t('Contact_Qualify')}</h1>
                <br />
                <br />
                <Form.Group>
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        id="input-styles2"
                        type="text"
                        placeholder={t('Contact_Name')}
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        id="input-styles2"
                        type="email"
                        placeholder={t('Contact_email')}
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
                        placeholder={t('Contact_Town')}
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
                        placeholder={t('Contact_Position')}
                      />
                    </div>
                    <div className="col-lg-6">
                      <button className="btn btn-secondary">{t('Contact_LoadCV')}</button>
                    </div>
                  </div>
                  <br />
                  <div className="position-relative text-center formInput" style={{ marginTop: 22 }}>
                    <button className="btn btn-primary">{t('Contact_Send')}</button>
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
