import React from "react";
import { FooterArea } from "./styled";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import Fade from "react-reveal/Fade";
export default function Footer() {
  let ano = new Date();
  return (
    <FooterArea>
      <Fade right duration={900}>
        <div className="left-footer">
          <h3>Todos os direitos reservados {ano.getFullYear()}.</h3>
        </div>
      </Fade>
      <Fade left duration={900}>
        <div className="right-footer">
          <a href="https://github.com/EduCrr" target="_blank">
            <GitHub />
          </a>

          <a href="https://www.linkedin.com/in/educrr16/" target="_blank">
            <LinkedIn />
          </a>

          <a href="https://www.instagram.com/eduardo.dudis/" target="_blank">
            <Instagram />
          </a>
        </div>
      </Fade>
    </FooterArea>
  );
}
