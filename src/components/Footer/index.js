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
      <Fade right duration={1500}>
        <div className="left-footer">
          <h3>Todos os direitos reservados {ano.getFullYear()}.</h3>
        </div>
      </Fade>
      <Fade left duration={1500}>
        <div className="right-footer">
          <a href="/">
            <GitHub />
          </a>
          <a href="/">
            <LinkedIn />
          </a>
          <a href="/">
            <Instagram />
          </a>
        </div>
      </Fade>
    </FooterArea>
  );
}
