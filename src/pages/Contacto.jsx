import React from "react";
import { Form } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

export const Contacto = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <img
        src={`/img/contacto/contacto_portada-${i18n.language}.png`}
        style={{ width: "100%" }}
        alt=""
      />
      <div className="container" style={{ paddingBottom: 80 }}>
        <section
          className="section section-lg bg-transparent text-center novi-background"
          style={{ paddingTop: "0px !important" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h1 style={{ color: "#19679e" }} > {t('Contact_Soon')} </h1>
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
                  </div>
                  <br/>
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        id="input-styles2"
                        type="email"
                        placeholder={t('Contact_email')}
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        id="input-styles2"
                        type="text"
                        placeholder="Teléfono"
                      />
                    </div>
                  </div>
                  <br/>
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        id="input-styles2"
                        type="text"
                        placeholder="Tipo de servicio"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        id="input-styles2"
                        type="text"
                        placeholder="País"
                      />
                    </div>
                  </div>
                  <br/>
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        id="input-styles2"
                        type="text"
                        placeholder={t('Contact_Town')}
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        className="form-control"
                        id="input-styles2"
                        type="text"
                        placeholder="Descripción de servicio"
                      />
                    </div>
                  </div>
                  <br/>
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
