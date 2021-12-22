import React from "react";
import { HomeArea } from "./styled";
import Fade from "react-reveal/Fade";

import "react-alice-carousel/lib/alice-carousel.css";
import Slider from "../../components/Slider";
import Portfolio from "../../components/Portfolio";
import Contato from "../../components/Contato";
import Skills from "../../components/Skills";
export default function Home() {
  return (
    <>
      <HomeArea>
        <Slider />
        <div id="sobre"></div>
        <Fade left duration={900}>
          <section className="about">
            <div className="right-about">
              <h1>Sobre</h1>
              <p>
                Olá! Meu nome é Eduardo Eugênio Carraro e gosto de criar novas
                ideias para o mundo digital. Meu propósito é de se tornar um
                profissional de excelência, buscando inovar com novas
                experiências que facilitam a vida do usuário.
              </p>
              <p>
                Atualmente tive a oportunidade de criar alguns projetos para
                clientes, visando na criação de sites objetivos e inovadores.
                Meu foco agora, é entrar no mercado de trabalho como programador
                Front-end. Veja logo abaixo algumas tecnologias com às quais
                tenho trabalhado recentemente.
              </p>
            </div>
          </section>
        </Fade>
        <section className="photos">
          <Fade right cascade duration={900}>
            <div className="photo">
              <img
                src="https://images.unsplash.com/photo-1578390432942-d323db577792?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="Eduardo"
              />
            </div>
            <div className="photo">
              <div className="container">
                <img src="/assets/inovation.jpg" alt="inovation" />
                <div className="overlay">
                  <div className="center">
                    <h1>Inovação</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="photo">
              <div className="container">
                <img src="/assets/smoke.jpg" alt="smoke" />
                <div className="overlay">
                  <div className="center">
                    <h1>Criatividade</h1>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </Fade>
        </section>
        <p style={{ textAlign: "center" }}>
          <i>
            "Eu crio e desenvolvo novas experiências que tornam <br />a vida das
            pessoas mais simples e divertida."
          </i>
        </p>
        <Skills />
        <Portfolio />
        <Contato />
      </HomeArea>
    </>
  );
}
