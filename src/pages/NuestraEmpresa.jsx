import React from "react";
import ReactPlayer from "react-player";

export const NuestraEmpresa = () => {
  return (
    <>
      <img
        src="/img/nosotros/nuestra_empresa_portada.png"
        style={{ width: "100%" }}
        alt=""
      />
      <div className="container">
        <div className="row" style={{ paddingTop: 40 }}>
          <div className="col-sm-6 bloqueText">
            <div className="container content-row-area animated">
              <h2
                className="text-center text-md-left animated fadeInUp covid"
                style={{ borderBottom: "solid 5px #19679e" }}
              >
                Nosotros
              </h2>
              <div
                className="content-row content-row-max-width animated fadeInUp"
                data-animate='{"class":"fadeInUp"}'
                style={{ marginTop: 45 }}
              >
                <div
                  className="content-row-item content-row-body"
                  style={{ marginLeft: 20 }}
                >
                  <div
                    className="content-row-text textBlock"
                    style={{ fontSize: 20, textAlign: 'justify' }}
                  >
                    En Intosys conformamos una empresa totalmente orientada a
                    proveer servicios de Tecnologías de la Información a
                    Fabricantes de Tecnologías de Información, Globalizadores y
                    Grandes Distribuidores. Iniciamos en el año 2000 y contamos
                    con personal con más de 25 años de experiencia en Servicios
                    Técnicos y Logísticos, cubriendo la totalidad del continente
                    americano.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="img/nosotros/nuestra_empresa1.png" alt="" />
          </div>
        </div>
        <div style={{ paddingTop: 40 }}>
          <div className="row">
            <div className="col-sm-12 col-lg-9">
              <div className="d-flex bloquePadre">
                <div
                  className="d-flex leftBlock"
                  style={{ flexFlow: "column" }}
                >
                  <div className="bloqueIndex">
                    <h2
                      className="text-center text-md-left covid"
                      style={{ fontSize: 30 }}
                    >
                      Misión
                    </h2>
                  </div>
                  <div
                    className="content-row-text textBlock"
                    style={{ fontSize: 17, textAlign: 'justify' }}
                  >
                    Cumplir y exceder los requisitos y expectativas de nuestros
                    clientes, proporcionando asistencia técnica confiable a
                    Tecnologías de Información.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-lg-3"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="img/nosotros/nuestra_empresa2.jpg"
                style={{ paddingTop: 35 }}
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-sm-12 col-lg-3"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="img/nosotros/nuestra_empresa3.jpg"
                  style={{ paddingTop: 25 }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm-12 col-lg-9">
              <div className="d-flex bloquePadre">
                <div
                  className="d-flex leftBlock"
                  style={{ flexFlow: "column" }}
                >
                  <div className="bloqueIndex">
                    <h2 className="text-center text-md-left covid">Visión</h2>
                  </div>
                  <div
                    className="content-row-text textBlock"
                    style={{ fontSize: 17, textAlign: 'justify' }}
                  >
                    Ser reconocida como una empresa que ofrece soluciones
                    sólidas, ágiles y de alta calidad en Productos y Servicios
                    de Tecnologías de Información, logrando la lealtad de sus
                    clientes internos y externos.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ paddingTop: 80 }}>
          <div className="col-12">
            <div className="col-md-12">
              <ReactPlayer
                url="http://publicitarte.com.mx/Intosys2/images/Intosys_ES_02.mp4"
                width="100%"
                height="100%"
                style={{ border: "solid rgb(245,245,245)" }}
                controls={true}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 bloqueText">
            <div className="container content-row-area animated">
              <h2
                className="text-center text-md-left animated fadeInUp covid"
                style={{ borderBottom: "solid 5px #19679e" }}
              >
                Calidad ISO 20000
              </h2>
              <div
                className="content-row content-row-max-width animated fadeInUp"
                data-animate='{"class":"fadeInUp"}'
                style={{ marginTop: 45 }}
              >
                <div className="content-row-item content-row-body">
                  <div
                    className="content-row-text textBlock"
                    style={{ fontSize: 20 }}
                  >
                    En Intosys operamos bajo la norma internacional de Calidad ISO 20000 en todos nuestros
                    procesos, buscando mantenerlos ágiles y funcionales en base al método de mejora continua.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="/img/nosotros/iso.png" height="350px" alt="" />
          </div>
        </div>

        <div className="row">
          <div
            className="col-6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/img/nosotros/nuestra_empresa4.png"
              height="350px"
              alt=""
            />
          </div>
          <div className="col-sm-6 bloqueText">
            <div className="container content-row-area animated">
              <h2
                className="text-center text-md-left animated fadeInUp covid"
                style={{ borderBottom: "solid 5px #19679e" }}
              >
                Comunidad
              </h2>
              <div
                className="content-row content-row-max-width animated fadeInUp"
                data-animate='{"class":"fadeInUp"}'
                style={{ marginTop: 45 }}
              >
                <div className="content-row-item content-row-body">
                  <div className="content-row-text" style={{ fontSize: 20 }}>
                    Regresando a la comunidad:
                    <p>
                      En Intosys nos preocupamos por ayudar ¿Cómo lo hacemos?
                    </p>
                  </div>
                  <div className="content-row-text" style={{ fontSize: 20, textAlign: 'justify' }}>
                  En Intosys, comulgamos con la idea de devolver, a nuestra comunidad, algo de lo mucho que no
                  da. Es por eso que, a través de la ONG World Vision hacemos el apoyo a niños en situación
                  económica precaria para recibir servicios de salud, vestido y educación. Intosys forma parte del
                  programa “Patrocina una Historia”.
                  </div>
                  <img src="img/nosotros/world_vision.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
