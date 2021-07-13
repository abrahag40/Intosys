import React from "react";
import { useTranslation } from "react-i18next";

export const Noticias = () => {

  const { t, i18n } = useTranslation();


  return (
    <>
      <img
        src="/img/noticias/noticias_portada.jpg"
        style={{ width: "100%" }}
        alt=""
      />
      <div className="container">
        <section
          className="section section-lg bg-transparent novi-background"
          style={{ paddingTop: 0 }}
          data-preset='{"title":"Blog Boxed","category":"blog","reload":true,"id":"blog-boxed-2"}'
        >
          <div>
            <div className="row row-40 ">
              <div className="col-md-12">
                <h2>Novedades</h2>
                <div
                  className="post post-boxed card"
                  style={{ boxShadow: "5px 7px 30px #888888", padding: 40, margin: "70px 0px" }}
                >
                  <div className="post-meta post-meta-between">
                    <div className="post-meta-item">
                      <span className="post-meta-icon int-clock novi-icon"></span>
                      <a className="post-meta-link" href="single-post.html">
                        Octubre 01, 2020
                      </a>
                    </div>
                  </div>
                  <br/>
                  <h3 className="h3-small post-title">
                    A nuestros clientes, proveedores y comunidad en general:
                  </h3>
                  <div className="post-text">
                    {t('News_NoveltiesTxt1')}
                  </div>
                  <div className="post-text">
                    {t('News_NoveltiesTxt2')}
                  </div>
                  <div className="post-text">
                    {t('News_NoveltiesTxt3')}
                  </div>
                  <div className="post-text">
                    {t('News_NoveltiesTxt4')}
                  </div>
                  <div style={{ padding: "20px 0px 5px 30px" }}>
                    <ul>
                      <li> Gel antibacterial.</li>
                      <li> Cubrebocas</li>
                      <li>
                         Careta (en caso del área de servicios de campo).
                      </li>
                      <li> Aerosol desinfectante</li>
                      <li> Microfibra</li>
                      <li> Toallitas desinfectantes.</li>
                      <li> Pulsera con gel antibacterial.</li>
                      <li> Jabón laminado</li>
                      <li> Guantes desechables</li>
                    </ul>
                  </div>
                  <div className="post-text">
                    {t('News_NoveltiesTxt5')}
                  </div>
                  <div className="post-text">
                    {t('News_NoveltiesTxt6')}
                  </div>
                  <br />
                  <div>Noel Santiago Sosa.</div>
                  <div>{t('News_NoveltiesTxt7')}</div>
                  <div className="post-meta post-meta-between post-meta-lg">
                    <div className="post-meta-item">
                      <span className="post-meta-icon int-tag novi-icon"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
