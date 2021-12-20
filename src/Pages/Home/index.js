import React, { useState, useContext, useEffect } from "react";
import { HomeArea } from "./styled";
import AliceCarousel from "react-alice-carousel";
import WhatsApp from "@material-ui/icons/WhatsApp";
import "react-alice-carousel/lib/alice-carousel.css";
import Close from "@material-ui/icons/Close";
import { OpenContext } from "../../OpenContext";
import Modal from "../../components/Modal";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

export default function Home() {
  const { setOpen } = useContext(OpenContext);
  const [openForm, setOpenForm] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const [icons, setIcons] = useState([
    { title: "Conhecimento em:", icon: "/assets/knowledge.png" },
    { title: "Html", icon: "/assets/html.png" },
    { title: "Css", icon: "/assets/css.png" },
    { title: "JavaScript", icon: "/assets/js.png" },
    { title: "TypeScript", icon: "/assets/type.jpg" },
    { title: "React Js", icon: "/assets/react.png" },
    { title: "Bootstrap ", icon: "/assets/bootstrap.png" },
    { title: "Sass", icon: "/assets/sass.png" },
    { title: "Webpack", icon: "/assets/webpack.png" },
    { title: "Git", icon: "/assets/git.png" },
    { title: "Figma", icon: "/assets/figma.png" },
  ]);
  const [portfolio, setPortfolio] = useState([
    {
      title: "E-Movie",
      image: "/assets/emovie.png",
      desc: "Um site da web para visualizar dados de filmes e series, utlizando informações da (TMDB) API. Visualize seus principais artistas de cada filme e detalhes sobre sua sinopse. Crie e salve novas listas na área de favoritos e muito mais.",
      tools: "React, Styled Components, API, Reducer, Context.",
      url: "http://edumoviee.epizy.com/",
      git: "https://github.com/EduCrr/movies",
    },
    {
      title: "House",
      image: "/assets/house.png",
      desc: "Um site da web para visualizar casas e suas informações. Visualize casas por estados selecionados e uma área de login para o administrador ter acesso para editar, deletar e criar uma nova casa. Todos os dados vindo do Firebase.",
      tools: "React, Firebase, Styled Components, Context.",
      url: "http://eduhouse.epizy.com/",
      git: "https://github.com/EduCrr/house",
    },
    {
      title: "Chair",
      image: "/assets/chair.png",
      desc: "Um site da web para adicionar produtos para o seu carrinho de compras. Visualize informações de cada produto, e uma área para ver os items no carrinho. Todos os dados vindo do Firebase.",
      tools: "React, Firebase, Styled Components, Context.",
      url: "http://educhair.epizy.com/",
      git: "https://github.com/EduCrr/chairs",
    },
    {
      title: "Detetive Barros ",
      image: "/assets/barros.png",
      desc: "Um site institucional para classificar seus serviços prestados. A pedido do cliente, ele informou que gostaria de algo simples e direto, então resolvi criar um site intuitivo de página única com formulário de contato. ",
      tools: "React, Styled Components, EmailJs.",
      url: "http://barrosdetetive.com.br/",
      git: "https://github.com/EduCrr/barrosdetetive",
    },
  ]);
  let items = icons.map((item, k) => (
    <Fade bottom cascade duration={900}>
      <div className="hab-area" key={k}>
        <h1>{item.title}</h1>
        <div class="container">
          <div class="overlay">
            <div class="center">
              <img
                style={{ height: "128px", width: "128px" }}
                src={item.icon}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  ));

  function handleModal(item) {
    setOpenModal(true);
    setModalItem(item);
  }

  let items2 = portfolio.map((item, k) => (
    <div className="port-area" key={k}>
      <img onClick={() => handleModal(item)} src={item.image} />
    </div>
  ));

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    768: { items: 3 },
    1024: { items: 3 },
  };
  const responsive2 = {
    0: { items: 1 },
    568: { items: 1 },
    768: { items: 1 },
    1024: { items: 1 },
  };

  function handleOpenForm() {
    setOpenForm(!openForm);
    setOpen(false);
  }

  return (
    <HomeArea open={openForm} onClick={() => setOpen(false)}>
      <div className="slider-primary">
        <Fade bottom cascade duration={900}>
          <div className="slider-text">
            <div className="inside">
              <div className="desc">
                <small>Eduardo Carraro</small>
                Front-end Developer
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Fade left duration={900}>
        <section className="about">
          <div className="right-about">
            <h1>Sobre</h1>
            <p>
              Olá! Meu nome é Eduardo Carraro e gosto de criar novas ideias para
              o mundo digital. Meu propósito é de se tornar um profissional de
              excelência, buscando inovar com novas experiências que facilitam a
              vida do usuário.
            </p>
            <p>
              Atualmente tive a oportunidade de criar alguns sites para
              clientes. Meu foco agora, é entrar no mercado de trabalho como
              programador Front-end. Veja logo abaixo algumas tecnologias com às
              quais tenho trabalhado recentemente.
            </p>
          </div>
        </section>
      </Fade>

      <section className="photos">
        <Fade right cascade duration={900}>
          <div className="photo">
            <img src="https://images.unsplash.com/photo-1578390432942-d323db577792?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
          </div>
          <div className="photo">
            <div class="container">
              <img src="/assets/inovation.jpg" />
              <div class="overlay">
                <div class="center">
                  <h1>Inovação</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="photo">
            <div class="container">
              <img src="/assets/smoke.jpg" />
              <div class="overlay">
                <div class="center">
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
      <section className="hab">
        <AliceCarousel
          mouseTracking
          items={items}
          disableDotsControls={true}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </section>
      <section className="projects">
        <div className="left-side">
          <h1>Portfólio</h1>
          <p>Confira alguns dos meus últimos projetos realizados!</p>
        </div>
        <div className="right-side">
          <AliceCarousel
            mouseTracking
            items={items2}
            disableDotsControls={true}
            responsive={responsive2}
            controlsStrategy="alternate"
          />
        </div>
      </section>
      <Fade left duration={900}>
        <section className="contact">
          <div className="contact-area">
            <h2>Vamos conversar?</h2>
            <button onClick={handleOpenForm}>Entre em contato</button>
          </div>
        </section>
      </Fade>
      <Bounce right when={openForm}>
        <div className="show-infos inputs-email">
          <Close
            style={{ fontSize: "35px", cursor: "pointer" }}
            onClick={() => setOpenForm(false)}
          />
          <form>
            <input required placeholder="Nome" type="text" />
            <input required placeholder="Email" type="email" />
            <input required placeholder="Telefone" type="text" />
            <textarea required rows="5" placeholder="Mensagem"></textarea>
            <button type="submit">Enviar Mensagem</button>
          </form>
          <div className="phone">
            <h3>
              <WhatsApp /> (54) 99104-6763
            </h3>
          </div>
        </div>
      </Bounce>
      <Modal data={modalItem} close={setOpenModal} open={openModal} />
    </HomeArea>
  );
}
