import React from "react";

export const Servicios = () => {

  const BlockText = ({title}) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        <span style={{ marginRight: 8 }}>•</span>
        <p> {title} </p>
      </div>
    )
  }

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
              <div className="d-flex leftBlock" style={{ flexFlow: "column" }}>
                <div className="bloqueIndex">
                  <h4> Servicios de Logística </h4>
                </div>
                <div className="blurb-text">
                  <BlockText title={'Amplia red de Almacenes para refacciones, suministros y equipos completos.'}/>

                  <BlockText title={'Cobertura Geográfica en las ciudades más importantes de América Latina. '}/>
                  <BlockText title={'Sistema de Control de Inventarios vía web. '}/>
                  <BlockText title={'Consultoría en Generación de Imágenes de Software. '}/>
                  <BlockText title={'Carga masiva de imágenes de Software. '}/>
                  <BlockText title={'Servicios de Etiquetado de Cajas y Equipos de Cómputo. '}/>
                  <BlockText title={'Servicios de Disposición Final de Hardware. '}/>
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
            className="col-sm-12 col-lg-6 imgServicios"
            style={{ paddingTop: 0 }}
          >
            <img
              src="/img/servicios/servicios2.png"
              style={{ maxHeight: 300 }}
              alt=""
            />
          </div>
          <div
            className="col-sm-12 col-lg-6 bloqueText"
            style={{ paddingTop: 0 }}
          >
            <div className="d-flex bloquePadre">
              <div className="d-flex leftBlock" style={{ flexFlow: "column" }}>
                <div className="bloqueIndex">
                  <h4> Servicios Técnicos a Cómputo de Usuario Final.</h4>
                </div>
                <div className="blurb-text">
                  <BlockText title={'Service Desk bilingüe operando en 7x24.'}/>
                  <BlockText title={'Ingeniería de Campo con más de 5 años de experiencia en atención a Cómputo de usuario final.'}/>
                  <BlockText title={'Contratos de Mantenimiento Correctivo.'}/>
                  <BlockText title={'Niveles de Servicio de 4 horas, mismo día y siguiente día hábil.'}/>
                  <BlockText title={'Atención de Incidentes de Hardware por Evento.'}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="col-sm-12 col-lg-6 bloqueText"
            style={{ paddingTop: 0 }}
          >
            <div className="d-flex bloquePadre">
              <div className="d-flex leftBlock" style={{ flexFlow: "column" }}>
                <div className="bloqueIndex">
                  <h4> Servicios de consultoría del centro de datos. </h4>
                </div>
                <div className="blurb-text">
                  <p> • Virtualización (Servidores y VDI).</p>
                  <p> • Consolidación del servidor.</p>
                  <p> • Soluciones de alta disponibilidad.</p>
                  <p> • Reubicación de Data Center.</p>
                  <p> • Copia de seguridad / restauración.</p>
                  <p> • Migración (SO, servicios, aplicaciones de bajo nivel). </p>
                  <p> • Proyectos especiales para Data Center.</p>
                  <p> • Migración a la nube pública o privada.</p>
                  <p> • Implementación de ambientes virtuales híbridos.</p>
                  <p> • Consultores Certificados para atención de Data Center.</p>
                  <p> • Administración de Proyectos bajo SCRUM y PMI.</p>
                </div>
              </div>
            </div>
          </div>
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
            className="col-sm-12 col-lg-6 bloqueText"
            style={{ paddingTop: 0 }}
          >
            <div className="d-flex bloquePadre">
              <div className="d-flex leftBlock" style={{ flexFlow: "column" }}>
                <div className="bloqueIndex">
                  
                  <h4> Cobertura geográfica </h4>
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
            <h6> Presencia Directa:</h6>
            <img
              src="/img/servicios/mapa1.png"
              style={{ width: "100%" }}
              alt=""
            />
          </div>
          <div className="col-sm-4">
            <h6> Business Partners:</h6>
              <p> • Ecuador </p>
              <p> • Bolivia </p>
              <p> • Venezuela </p>
              <p> • Paraguay </p>
              <p> • Panamá </p>
              <p> • Uruguay </p>
              <p> • Guatemala </p>
              <p> • Nicaragua </p>
              <p> • Salvador </p>
              <p> • Belice </p>
              <p> • Honduras </p>
          </div>
          <div className="col-sm-4">
            <h6> Presencia de Servicio:</h6>
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
    </>
  );
};
