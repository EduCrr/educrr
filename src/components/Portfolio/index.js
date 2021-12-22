import React, { useState } from "react";
import { PortfolioArea } from "./styled";
import AliceCarousel from "react-alice-carousel";
import Modal from "../Modal";
export default function Portfolio() {
  const [openModal, setOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState({});
  const [portfolio, setPortfolio] = useState([
    {
      title: "E-Movie",
      image: "/assets/emovie.png",
      desc: "Um site da web para visualizar dados de filmes e séries, utlizando informações da (TMDB) API. Visualize os principais atores de cada filme e detalhes sobre sua sinopse. Salve seus filmes e séries prediletos na página favoritos e muito mais.",
      tools: "React, Styled Components, API, Reducer, Context.",
      url: "http://edumoviee.epizy.com/",
      git: "https://github.com/EduCrr/movies",
    },
    {
      title: "House",
      image: "/assets/house.png",
      desc: "Um site da web para visualizar casas e suas informações. Visualize casas por estados selecionados e uma área de login para o administrador ter acesso para editar, deletar e criar uma nova casa. Todos os dados vindos do Firebase.",
      tools: "React, Firebase, Styled Components, Context.",
      url: "http://eduhouse.epizy.com/",
      git: "https://github.com/EduCrr/house",
    },
    {
      title: "Chair",
      image: "/assets/chair.png",
      desc: "Um site da web para adicionar produtos para o seu carrinho de compras. Visualize informações de cada produto, e uma página para ver os items adicionados no carrinho. Todos os dados vindos do Firebase.",
      tools: "React, Firebase, Styled Components, Context.",
      url: "http://educhair.epizy.com/",
      git: "https://github.com/EduCrr/chairs",
    },
    {
      title: "Detetive Barros ",
      image: "/assets/barros.png",
      desc: "Um site institucional para especificar seus serviços prestados. O objetivo do cliente era criar um site intuitivo de página única com formulário de contato.  ",
      tools: "React, Styled Components, EmailJs.",
      url: "http://barrosdetetive.com.br/",
      git: "https://github.com/EduCrr/barrosdetetive",
    },
  ]);
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
  const responsive2 = {
    0: { items: 1 },
    568: { items: 1 },
    768: { items: 1 },
    1024: { items: 1 },
  };
  return (
    <PortfolioArea>
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
      <Modal data={modalItem} close={setOpenModal} open={openModal} />
    </PortfolioArea>
  );
}
