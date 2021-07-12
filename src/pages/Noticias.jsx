import React from "react";

export const Noticias = () => {
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
                    En los últimos meses derivado de la pandemia de COVID-19,
                    México y el resto del mundo han enfrentado una de las crisis
                    más grandes del mundo, tanto económica como socialmente y en
                    INTOSYS somos conscientes de ello.
                  </div>
                  <div className="post-text">
                    Esta pandemia ha planteado nuevos esquemas de trabajo en las
                    empresas, ha hecho que nos adaptemos a una Nueva Normalidad
                    donde la vida a dado un giro que nos permitió aprender y dar
                    un paso más allá de donde nos encontrábamos hace 9 meses.
                  </div>
                  <div className="post-text">
                    Actualmente nuestras operaciones a nivel LATAM han tomado
                    una evolución con directrices de acuerdo con las medidas de
                    prevención de cada país, las exigencias y necesidades de
                    cada uno de nuestros clientes.
                  </div>
                  <div className="post-text">
                    En Intosys queremos asegurarnos de la salud de nuestro
                    equipo de trabajo, por lo tanto, les damos acceso a kits de
                    prevención y cuidado contra el COVID-19, los cuales
                    contienen:
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
                    Sabemos que no es fácil operar en esta situación, pero
                    también sabemos que juntos podremos lograr salir adelante y
                    retomar la economía, gracias al esfuerzo que realizan cada
                    día, seguimos comprometidos con cumplir y superar sus
                    expectativas de Intosys.
                  </div>
                  <div className="post-text">
                    Gracias por confiar en nosotros.
                  </div>
                  <br />
                  <div>Noel Santiago Sosa.</div>
                  <div>Director de Logística y Servicio.</div>
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
