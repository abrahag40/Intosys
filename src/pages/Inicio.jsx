import React from "react";
import "../blurb.css";
import {
  BrowserRouter as Router,
  useHistory 
} from "react-router-dom";
import { Noticias } from "./Noticias";
import { useTranslation } from "react-i18next";

export const Inicio = () => {
  let history = useHistory();
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  const handleClick = () => {
    history.push("/Noticias");
  }

  return (
    <>
    <Router>
      <img
        src={`/img/inicio/inicio_portada-${i18n.language}.png`}
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
                  <h4>{t('Home_porqueElegirnos')}</h4>
                </div>
                <div className="textBlock" style={{ fontSize: "inherit" }}>
                  {t('Home_porqueElegirnosText')}
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
                  <h4>{t('Home_serviceQE')}</h4>
                </div>
                <div className="textBlock" style={{ fontSize: "inherit" }}>
                {t('Home_serviceQEText')}
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
                  <h4>{t('Home_ITServices')}</h4>
                </div>
                <div className="textBlock" style={{ fontSize: "inherit" }}>
                {t('Home_ITServicesText')}
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
                  <h4>{t('Home_ServicesModel')}</h4>
                </div>
                <div className="textBlock" style={{ fontSize: "inherit" }}>
                  {t('Home_ServicesModelText')}
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
                  <h4>{t('Home_OurCustomers')}</h4>
                </div>
                <div className="textBlock" style={{ fontSize: "inherit" }}>
                  {t('Home_OurCustomersText')}
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
                  <h4>{t('Home_Improvement')}</h4>
                </div>
                <div className="textBlock" style={{ fontSize: "inherit" }}>
                {t('Home_ImprovementText')}
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
                    {t('Home_COVID-19')}
                  </h1>
                  <div
                    className="content-row content-row-max-width animated fadeInUp"
                    data-animate='{"class":"fadeInUp"}'
                    style={{ marginTop: 45 }}
                  >
                    <div className="content-row-item content-row-body">
                      <div className="textBlock">
                        {t('Home_COVID-19Text')}
                      </div>
                      <div className="textBlock">
                        {t('Home_COVID-19Text2')}
                      </div>
                      <div className="textBlock">
                        {t('Home_COVID-19Text3')}
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
