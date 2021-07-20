import React from "react";
import ReactPlayer from "react-player";
import {
  BrowserRouter as Router,
  useHistory 
} from "react-router-dom";
import { useTranslation } from "react-i18next";


export const NuestraEmpresa = () => {
  let history = useHistory();
  const { t, i18n } = useTranslation();
  const handleClick = () => {
    window.open('https://worldvisionmexico.org.mx/', '_blank');
  }

  return (
    <>
      <img
        src={`/img/nosotros/nuestra_empresa_portada-${i18n.language}.png`}
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
                {t('OurCompany_Us')}
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
                    {t('OurCompany_UsText')}
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
                      {t('OurCompany_Mission')}
                    </h2>
                  </div>
                  <div
                    className="content-row-text textBlock"
                    style={{ fontSize: 17, textAlign: 'justify' }}
                  >
                    {t('OurCompany_MissionText')}
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
                    <h2 className="text-center text-md-left covid">{t('OurCompany_Vision')}</h2>
                  </div>
                  <div
                    className="content-row-text textBlock"
                    style={{ fontSize: 17, textAlign: 'justify' }}
                  >
                    {t('OurCompany_VisionText')}
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
                {t('OurCompany_ISO')}
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
                    {t('OurCompany_ISOText')}
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
                {t('OurCompany_Community')}
              </h2>
              <div
                className="content-row content-row-max-width animated fadeInUp"
                data-animate='{"class":"fadeInUp"}'
                style={{ marginTop: 45 }}
              >
                <div className="content-row-item content-row-body">
                  <div className="content-row-text" style={{ fontSize: 20, textAlign: 'justify' }}>
                    {t('OurCompany_CommunityText')}
                    <a href='https://worldvisionmexico.org.mx/' style={{ marginLeft: 4 }}>{t('OurCompany_CommunityText2')}</a>
                    {t('OurCompany_CommunityText3')}
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
