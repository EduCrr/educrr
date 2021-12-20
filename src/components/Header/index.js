import React, { useState, useContext, useEffect } from "react";
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
  const [blackHeader, setBlackHeader] = useState(false);
  function handleMenu() {
    setOpen(!open);
  }
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return (
    <>
      <div id="home"></div>
      <div
        className="menuBackground"
        style={{
          background: blackHeader ? "#11191b" : "transparent",
          height: blackHeader ? "80px" : "0px",
          width: "100%",
          position: blackHeader ? "fixed" : "none",
          zIndex: "98",
          transition: "all ease 0.4s",
        }}
      ></div>
      <HeaderArea className="menu-state" open={open} black={blackHeader}>
        <div id="home"></div>
        <div className="content">
          <div className="logo">
            <a href="#home">Eduardo</a>
          </div>
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
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#sobre">Sobre</a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfólio</a>
                  </li>
                  <li>
                    <a href="#contato">Contato</a>
                  </li>
                </div>
              </ul>
            </nav>
            <div className="icons" onClick={() => setOpen(false)}>
              <a href="https://github.com/EduCrr" target="_blank">
                <GitHub />
              </a>

              <a href="https://www.linkedin.com/in/educrr16/" target="_blank">
                <LinkedIn />
              </a>

              <a
                href="https://www.instagram.com/eduardo.dudis/"
                target="_blank"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </Bounce>
      </HeaderArea>
    </>
  );
}
