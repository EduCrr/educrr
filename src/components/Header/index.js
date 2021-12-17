import React, { useContext } from "react";
import { HeaderArea } from "./styled";
import Menu from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import { OpenContext } from "../../OpenContext";
import Bounce from "react-reveal/Bounce";
export default function Header() {
  const { open, setOpen } = useContext(OpenContext);

  function handleMenu() {
    setOpen(!open);
  }

  return (
    <HeaderArea className="menu-state" open={open}>
      <div className="content">
        <div className="logo">Eduardo</div>
        <div className="menu">
          <Menu
            onClick={handleMenu}
            style={{ fontSize: "35px", cursor: "pointer" }}
          />
        </div>
      </div>
      <Bounce right when={open}>
        <div className="show-infos menu-area">
          <div className="close">
            <Close
              style={{ fontSize: "35px", cursor: "pointer" }}
              onClick={() => setOpen(!open)}
            />
          </div>
          <nav>
            <ul onClick={() => setOpen(false)}>
              <div>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Sobre</a>
                </li>
                <li>
                  <a href="/">Portfólio</a>
                </li>
                <li>
                  <a href="/">Contato</a>
                </li>
              </div>
            </ul>
          </nav>
          <div className="icons" onClick={() => setOpen(false)}>
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
        </div>
      </Bounce>
    </HeaderArea>
  );
}
