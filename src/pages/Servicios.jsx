import React from "react";
import { useTranslation } from "react-i18next";

export const Servicios = () => {

  const { t, i18n } = useTranslation();

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
                  <h4> {t('ServicesGeo_Logistics')} </h4>
                </div>
                <div className="blurb-text">
                  <BlockText title={t('ServicesGeo_LogisticsTxt1')}/>
                  <BlockText title={t('ServicesGeo_LogisticsTxt2')}/>
                  <BlockText title={t('ServicesGeo_LogisticsTxt3')}/>
                  <BlockText title={t('ServicesGeo_LogisticsTxt4')}/>
                  <BlockText title={t('ServicesGeo_LogisticsTxt5')}/>
                  <BlockText title={t('ServicesGeo_LogisticsTxt6')}/>
                  <BlockText title={t('ServicesGeo_LogisticsTxt7')}/>
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
                  <h4> {t('ServicesGeo_EndUser')} </h4>
                </div>
                <div className="blurb-text">
                  <BlockText title={t('ServicesGeo_EndUserTxt1')}/>
                  <BlockText title={t('ServicesGeo_EndUserTxt2')}/>
                  <BlockText title={t('ServicesGeo_EndUserTxt3')}/>
                  <BlockText title={t('ServicesGeo_EndUserTxt4')}/>
                  <BlockText title={t('ServicesGeo_EndUserTxt5')}/>
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
                  <h4> {t('ServicesGeo_DataCenter')} </h4>
                </div>
                <div className="blurb-text">
                  <p> • {t('ServicesGeo_DataCenterTxt1')}</p>
                  <p> • {t('ServicesGeo_DataCenterTxt2')}</p>
                  <p> • {t('ServicesGeo_DataCenterTxt3')}</p>
                  <p> • {t('ServicesGeo_DataCenterTxt4')}</p>
                  <p> • {t('ServicesGeo_DataCenterTxt5')}</p>
                  <p> • {t('ServicesGeo_DataCenterTxt6')}</p>
                  <p> • {t('ServicesGeo_DataCenterTxt7')}</p>
                  <p> • {t('ServicesGeo_DataCenterTxt8')}</p>
                  <p> • {t('ServicesGeo_DataCenterTxt9')}</p>
                  <p> • {t('ServicesGeo_DataCenterTxt10')}</p>
                  <p> • {t('ServicesGeo_DataCenterTxt11')}</p>
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
                  <h4> {t('ServicesGeo_DedicatedEng')} </h4>
                </div>
                <div className="blurb-text">
                  <p>• {t('ServicesGeo_DedicatedEngTxt1')} </p>
                  <p>• {t('ServicesGeo_DedicatedEngTxt2')} </p>
                  <p>• {t('ServicesGeo_DedicatedEngTxt3')} </p>
                  <p>• {t('ServicesGeo_DedicatedEngTxt4')} </p>
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
                  
                  <h4> {t('ServicesGeo_GeographicCov')} </h4>
                </div>
                <div className="blurb-text">
                  <p>• {t('ServicesGeo_GeographicCov1')} </p>
                  <p>• {t('ServicesGeo_GeographicCov2')} </p>
                  <p>• {t('ServicesGeo_GeographicCov3')} </p>
                  <p>• {t('ServicesGeo_GeographicCov4')} </p>
                  <p>• {t('ServicesGeo_GeographicCov5')} </p>
                  <p>• {t('ServicesGeo_GeographicCov6')} </p>
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
                {t('ServicesGeo_OurServices')}
              </h1>
              <div
                className="content-row content-row-max-width animated fadeInUp"
                data-animate='{"class":"fadeInUp"}'
                style={{ marginTop: 45 }}
              ></div>
            </div>
          </div>
          <div className="col-sm-4">
            <h6> {t('ServicesGeo_PrecenceDirect')} </h6>
            <img
              src="/img/servicios/mapa1.png"
              style={{ width: "100%" }}
              alt=""
            />
          </div>
          <div className="col-sm-4">
            <h6> Business Partners:</h6>
              <p> • {t('pais_ecuador')} </p>
              <p> • {t('pais_bolivia')} </p>
              <p> • {t('pais_venezuela')} </p>
              <p> • {t('pais_paraguay')} </p>
              <p> • {t('pais_panama')} </p>
              <p> • {t('pais_uruguay')} </p>
              <p> • {t('pais_guatemala')} </p>
              <p> • {t('pais_nicaragua')} </p>
              <p> • {t('pais_elsalvador')} </p>
              <p> • {t('pais_belice')} </p>
              <p> • {t('pais_honduras')} </p>
          </div>
          <div className="col-sm-4">
            <h6> {t('ServicesGeo_Presence')}</h6>
            <p>• {t('pais_jamaica')} Jamaica.</p>
            <p>• {t('pais_haiti')} Haití.</p>
            <p>• {t('pais_republicadominicaca')} República Dominicana.</p>
            <p>• {t('pais_bahamas')} Bahamas.</p>
            <p>• {t('pais_anguila')} Anguila.</p>
            <p>• {t('pais_antiguaybarbuda')} Antigua y Barbuda.</p>
            <p>• {t('pais_guadalupe')} Guadalupe.</p>
            <p>• {t('pais_dominica')} Dominica.</p>
            <p>• {t('pais_martinica')} Martinica.</p>
            <p>• {t('pais_barbados')} Barbados.</p>
            <p>• {t('pais_granada')} Granada.</p>
            <p>• {t('pais_aruba')} Aruba.</p>
            <p>• {t('pais_curazao')} Curazao.</p>
            <p>• {t('pais_cuba')} Cuba.</p>
            <p>• {t('pais_islascaiman')} Islas Caimán.</p>
          </div>
        </div>
      </div>
    </>
  );
};
