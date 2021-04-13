import React from "react";
import { Form } from "react-bootstrap";

export const Contacto = () => {
  return (
    <>
      <img
        src="/img/contacto/contacto_portada.png"
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
              <div className="col-md-10 col-lg-6">
                <h1 style={{ color: "#19679e" }} >En breve nos pondremos en contacto con usted</h1>
                <br />
                <br />
                <Form.Group>
                  <div className="position-relative">
                    <input
                      className="form-control"
                      id="input-styles2"
                      type="text"
                      placeholder="Nombre"
                    />
                  </div>
                  <br />
                  <div className="position-relative formInput">
                    <input
                      className="form-control"
                      id="input-styles2"
                      type="number"
                      placeholder="Teléfono"
                    />
                  </div>
                  <br />
                  <div className="position-relative formInput">
                    <input
                      className="form-control"
                      id="input-styles2"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <br />
                  <div className="position-relative formInput">
                    <textarea
                      id="w3review"
                      className="form-control"
                      name="w3review"
                      rows="4"
                      cols="50"
                    ></textarea>
                  </div>
                  <br />
                  <div className="position-relative text-center formInput">
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
