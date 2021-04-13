import React from "react";

export const Servicios = () => {
  return (
    <>
      <img
        src="/img/servicios/portada_servicios.jpg"
        style={{ width: "100%" }}
        alt=""
      />
      <div className="container">
        <div className="row">
          <div
            className="col-sm-12 col-lg-6 bloqueText"
            style={{ paddingTop: 0 }}
          >
            <div className="d-flex bloquePadre">
              {/* <div className="d-flex" style={{ alignItems: "center" }}>
                <img
                  src="img/servicios/servicioCampo.png"
                  style={{ height: 80 }}
                  alt=""
                />
              </div> */}
              <div style={{ display: "flex", alignItems: "center" }}></div>
              <div className="d-flex leftBlock" style={{ flexFlow: "column" }}>
                <div className="bloqueIndex">
                  {" "}
                  <h4> Servicios de Logística </h4>{" "}
                </div>
                <div className="blurb-text">
                  <p>
                    {" "}
                    • Amplia red de Almacenes para refacciones, suministros y
                    equipos completos.{" "}
                  </p>
                  <p>
                    {" "}
                    • Cobertura Geográfica en las ciudades más importantes de
                    América Latina.{" "}
                  </p>
                  <p> • Sistema de Control de Inventarios vía web. </p>
                  <p> • Consultoría en Generación de Imágenes de Software. </p>
                  <p> • Carga masiva de imágenes de Software. </p>
                  <p>
                    {" "}
                    • Servicios de Etiquetado de Cajas y Equipos de Cómputo.{" "}
                  </p>
                  <p> • Servicios de Disposición Final de Hardware. </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-lg-6 imgServicios"
            style={{ paddingTop: 0 }}
          >
            <img
              src="/img/servicios/servicios1.png"
              style={{ maxHeight: 300 }}
              alt=""
            />
          </div>
        </div>

        <div className="row">
          <div
            className="col-sm-12 col-lg-6 bloqueText"
            style={{ paddingTop: 0 }}
          >
            <div className="d-flex bloquePadre">
              {/* <div className="d-flex" style={{ alignItems: "center" }}>
                <img
                  src="img/servicios/serviciosDesk.png"
                  style={{ height: 80 }}
                  alt=""
                />
              </div> */}
              <div className="d-flex leftBlock" style={{ flexFlow: "column" }}>
                <div className="bloqueIndex">
                  <h4> Servicios Técnicos a Cómputo de Usuario Final.</h4>
                </div>
                <div className="blurb-text">
                  <p> • Service Desk bilingüe operando en 7x24. </p>
                  <p>
                    {" "}
                    • Ingeniería de Campo con más de 5 años de experiencia en
                    atención a Cómputo de usuario final.
                  </p>
                  <p> • Contratos de Mantenimiento Correctivo. </p>
                  <p>
                    {" "}
                    • Niveles de Servicio de 4 horas, mismo día y siguiente día
                    hábil.{" "}
                  </p>
                  <p> • Atención de Incidentes de Hardware por Evento. </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-lg-6 imgServicios"
            style={{ paddingTop: 0 }}
          >
            <img
              src="/img/servicios/servicios2.png"
              style={{ maxHeight: 300 }}
              alt=""
            />
          </div>
        </div>

        <div className="row">
          <div
            className="col-sm-12 col-lg-6 bloqueText"
            style={{ paddingTop: 0 }}
          >
            <div className="d-flex bloquePadre">
              {/* <div className="d-flex" style={{ alignItems: "center" }}>
                <img
                  src="img/servicios/serviciosCobertura.png"
                  style={{ height: 80 }}
                  alt=""
                />
              </div> */}
              <div className="d-flex leftBlock" style={{ flexFlow: "column" }}>
                <div className="bloqueIndex">
                  <h4> Servicios de Consultoría para Data Center </h4>
                </div>
                <div className="blurb-text">
                  <p>
                    • Consultores Certificados para atención de Data Center.
                  </p>
                  <p>• Administración de Proyectos bajo SCRUM y PMI.</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-lg-6 imgServicios"
            style={{ paddingTop: 0 }}
          >
            <img
              src="/img/servicios/servicios3.png"
              style={{ maxHeight: 300 }}
              alt=""
            />
          </div>
        </div>

        <div className="row">
          <div
            className="col-sm-12 col-lg-6 imgServicios"
            style={{ paddingTop: 0 }}
          >
            <img
              src="/img/servicios/servicios4.png"
              style={{ maxHeight: 300 }}
              alt=""
            />
          </div>
          <div
            className="col-sm-12 col-lg-6 bloqueText"
            style={{ paddingTop: 0 }}
          >
            <div className="d-flex bloquePadre">
              {/* <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="img/servicios/servicioCampo.png"
                  style={{ maxWidth: 80 }}
                  className="imgIndex"
                  alt=""
                />
              </div> */}
              <div className="d-flex leftBlock" style={{ flexFlow: "column" }}>
                <div className="bloqueIndex">
                  <h4> Servicio de Ingeniería Dedicada </h4>
                </div>
                <div className="blurb-text">
                  <p>• Proyectos de Asignación de Ingeniería dedicada.</p>
                  <p>• Personal Experto en Tecnologías de Información.</p>
                  <p>• Con Backfill. </p>
                  <p>• Servicios por hora, día, semana, mes o año.</p>
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
              src="/img/servicios/servicios5.png"
              style={{ maxHeight: 300 }}
              alt=""
            />
          </div>
          <div
            className="col-sm-12 col-lg-6 bloqueText"
            style={{ paddingTop: 0 }}
          >
            <div className="d-flex bloquePadre">
              {/* <div className="d-flex" style={{ alignItems: "center" }}>
                <img
                  src="img/servicios/serviciosIng.png"
                  style={{ height: 80 }}
                  alt=""
                />
              </div> */}
              <div className="d-flex leftBlock" style={{ flexFlow: "column" }}>
                <div className="bloqueIndex">
                  {" "}
                  <h4> Cobertura geográfica </h4>{" "}
                </div>
                <div className="blurb-text">
                  <p>• Servicios de campo bajo demanda.</p>
                  <p>• Rack and stack bilingüe y configuración básica.</p>
                  <p>• Almacenamiento de partes y unidades completas.</p>
                  <p>• Disposición final certificada.</p>
                  <p>• Tendido de cableado estructurado para redes locales.</p>
                  <p>• WIFI survey (activa y pasiva).</p>
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
              src="/img/servicios/servicios6.png"
              style={{ maxHeight: 300 }}
              alt=""
            />
          </div>
          <div
            className="col-sm-12 col-lg-6 bloqueText"
            style={{ paddingTop: 0 }}
          >
            <div className="d-flex bloquePadre">
              {/* <div className="d-flex" style={{ alignItems: "center" }}>
                <img
                  src="img/servicios/serviciosGeo.png"
                  style={{ height: 80 }}
                  alt=""
                />
              </div> */}
              <div className="d-flex leftBlock" style={{ flexFlow: "column" }}>
                <div className="bloqueIndex">
                  <h4> Servicios de consultoría del centro de datos. </h4>
                </div>
                <div className="blurb-text">
                  <p>• Virtualización (Servidores y VDI).</p>
                  <p>• Consolidación del servidor.</p>
                  <p>• Soluciones de alta disponibilidad.</p>
                  <p>• Reubicación de Data Center.</p>
                  <p>• Copia de seguridad / restauración.</p>
                  <p>
                    • Migración (SO, servicios, aplicaciones de bajo nivel).
                  </p>
                  <p>• Proyectos especiales para Data Center.</p>
                  <p>• Migración a la nube pública o privada.</p>
                  <p>• Implementación de ambientes virtuales híbridos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ paddingBottom: 80 }}>
          <div
            className="col-sm-12 bloqueText"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="container content-row-area animated">
              <h1
                className="text-center text-md-left animated fadeInUp covid"
                style={{ borderBottom: "solid 5px #19679e" }}
                data-animate='{"class":"fadeInUp"}'
              >
                Nuestros Servicios y Presencia
              </h1>
              <div
                className="content-row content-row-max-width animated fadeInUp"
                data-animate='{"class":"fadeInUp"}'
                style={{ marginTop: 45 }}
              ></div>
            </div>
          </div>
          <div className="col-sm-4">
            <h6>Oficinas en América Latina:</h6>
            <p>• México.</p>
            <p>• Chile.</p>
            <p>• Argentina.</p>
            <p>• Colombia.</p>
            <p>• Costa Rica.</p>
            <p>• Perú.</p>
            <p>• Brasil.</p>
          </div>
          <div className="col-sm-4">
            <h6>Centros de Servicio en América Latina:</h6>
            <p>• Ecuador.</p>
            <p>• Bolivia.</p>
            <p>• Venezuela.</p>
            <p>• Paraguay.</p>
            <p>• Panamá.</p>
            <p>• Uruguay.</p>
            <p>• Guatemala.</p>
            <p>• Nicaragua.</p>
            <p>• El Salvador.</p>
            <p>• Belice.</p>
            <p>• Honduras.</p>
          </div>
          <div className="col-sm-4">
            <h6>Centros de Servicio en la Zona del Caribe:</h6>
            <p>• Jamaica.</p>
            <p>• Haití.</p>
            <p>• República Dominicana.</p>
            <p>• Bahamas.</p>
            <p>• Anguila.</p>
            <p>• Antigua y Barbuda.</p>
            <p>• Guadalupe.</p>
            <p>• Dominica.</p>
            <p>• Martinica.</p>
            <p>• Barbados.</p>
            <p>• Granada.</p>
            <p>• Aruba.</p>
            <p>• Curazao.</p>
            <p>• Cuba.</p>
            <p>• Islas Caimán.</p>
          </div>
        </div>
      </div>

      {/* <section data-preset='{"title":"Google Map","category":"map, contacts","reload":true,"id":"google-map-2"}'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6895336097214!2d-99.16928031260196!3d19.425815832693342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff361fce509f%3A0xac2b4d3c23ab639!2sVarsovia%2036%2C%20Ju%C3%A1rez%2C%20Cuauht%C3%A9moc%2C%2006600%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1602132443334!5m2!1ses-419!2smx"
          height="300"
          style={{ border: 0, width: "100%" }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </section> */}
    </>
  );
};
