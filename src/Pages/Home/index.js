import React, { useState } from "react";
import { HomeArea } from "./styled";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
export default function Home() {
  const [icons, setIcons] = useState([
    { title: "Html", icon: "/assets/html.png" },
    { title: "Css", icon: "/assets/css.png" },
    { title: "Js", icon: "/assets/js.png" },
    { title: "TypeScript", icon: "/assets/type.jpg" },
    { title: "React Js", icon: "/assets/react.png" },
    { title: "Sass", icon: "/assets/sass.png" },
    { title: "Webpack", icon: "/assets/webpack.png" },
    { title: "Git", icon: "/assets/git.png" },
    { title: "Figma", icon: "/assets/figma.png" },
  ]);
  const [portfolio, setPortfolio] = useState([
    {
      title: "Movie",
      image: "/assets/emovie.png",
      desc: "sdsa",
      tools: "react",
      url: "ss",
      git: "ss",
    },
    {
      title: "Movie",
      image: "/assets/house.png",
      desc: "sdsa",
      tools: "react",
      url: "ss",
      git: "ss",
    },
    {
      title: "Chair",
      image: "/assets/chair.png",
      desc: "sdsa",
      tools: "react",
      url: "ss",
      git: "ss",
    },
  ]);
  let items = icons.map((item, k) => (
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
  ));

  let items2 = portfolio.map((item, k) => (
    <div className="port-area" key={k}>
      <img src={item.image} />
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
  return (
    <HomeArea>
      <div className="slider-primary">
        <div className="slider-text">
          <div className="inside">Front-End Developer</div>
        </div>
      </div>

      <section className="about">
        <div className="right-about">
          <h1>Sobre</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
      <section className="photos">
        <div className="photo">
          <img src="https://images.unsplash.com/photo-1531850629230-0496c86d6d23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        </div>
        <div className="photo">
          <img src="/assets/smoke.jpg" />
        </div>
        <div className="photo">
          <img src="https://images.unsplash.com/photo-1589194837807-30a2f9540ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        </div>
      </section>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
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
      <section className="contact">
        <div className="contact-area">
          <h2>Lorem ipsum dolor sit amet,</h2>
          <button>Entra em contato</button>
        </div>
      </section>
    </HomeArea>
  );
}
