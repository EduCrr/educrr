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
import Slider from "../../components/Slider";
import emailjs from "emailjs-com";
export default function Home() {
  const { setOpen } = useContext(OpenContext);
  const [openForm, setOpenForm] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [erro, setErro] = useState("");
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
      desc: "Um site institucional para classificar seus serviços prestados. O objetivo do cliente era criar um site intuitivo de página única com formulário de contato. ",
      tools: "React, Styled Components, EmailJs.",
      url: "http://barrosdetetive.com.br/",
      git: "https://github.com/EduCrr/barrosdetetive",
    },
  ]);
  let items = icons.map((item, k) => (
    <Fade bottom cascade duration={900}>
      <div className="hab-area" key={k}>
        <h1>{item.title}</h1>
        <div className="container">
          <div className="overlay">
            <div className="center">
              <img
                style={{ height: "128px", width: "128px" }}
                src={item.icon}
                alt={item.title}
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
      <img
        onClick={() => handleModal(item)}
        src={item.image}
        alt={item.title}
      />
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
  //formulario

  function handleForm(e) {
    setErro("");
    e.preventDefault();
    if (
      nome.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      message.trim() === ""
    ) {
      setErro("Preencha os campos corretamente!");
      return;
    }
    emailjs
      .sendForm(
        "service_8cpbo8a",
        "template_jg032uh",
        e.target,
        "user_pFI3Mb96DRORRWn1vgazi"
      )
      .then(
        (result) => {
          setNome("");
          setEmail("");
          setPhone("");
          setMessage("");
          setErro("");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <HomeArea open={openForm} onClick={() => setOpen(false)}>
      <Slider />
      <div id="sobre"></div>
      <Fade left duration={900}>
        <section className="about">
          <div className="right-about">
            <h1>Sobre</h1>
            <p>
              Olá! Meu nome é Eduardo Eugênio Carraro e gosto de criar novas
              ideias para o mundo digital. Meu propósito é de se tornar um
              profissional de excelência, buscando inovar com novas experiências
              que facilitam a vida do usuário.
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
      <section className="hab">
        <AliceCarousel
          mouseTracking
          items={items}
          disableDotsControls={true}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </section>
      <section className="projects" id="portfolio">
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
        <section className="contact" id="contato">
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
          <form onSubmit={handleForm}>
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              placeholder="Nome"
              type="text"
              name="name"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              type="email"
              name="email"
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="Telefone"
              type="text"
              name="phone"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="5"
              placeholder="Mensagem"
              name="message"
            ></textarea>
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
