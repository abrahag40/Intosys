import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div
      className="footer bg-800 text-400 context-dark novi-background"
      style={{ paddingTop: 0 }}
    >
      <div className="container footerPadre">
        <div className="row row-15 align-items-center justify-content-between">
          <div className="col-auto">
            <div className="rights">
              <span>&copy; 2020&nbsp;</span>
              <span>Intosys S.A. de C.V.</span>
              <span> Todos los derechos reservados.&nbsp;</span>
              <a className="rights-link" href="privacy-policy.html"></a>
            </div>
          </div>
          <div className="col-auto">
            <div className="group-30 d-flex text-white spaceIcons">
              <a href="https://www.facebook.com/IntosysLATAM/" className="socialButton"> <FontAwesomeIcon icon={faFacebook} size="lg" /> </a>
              <a href="https://walink.co/c18bdb" className="socialButton"> <FontAwesomeIcon icon={faWhatsapp} size="lg"/> </a>
              <a href="https://twitter.com/intosyslatam" className="socialButton"> <FontAwesomeIcon icon={faTwitter} size="lg" /> </a>
              <a href="https://www.linkedin.com/company/intosys" className="socialButton"> <FontAwesomeIcon icon={faLinkedin} size="lg" /> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
