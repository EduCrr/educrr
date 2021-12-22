import React, { useState } from "react";
import { SkillArea } from "./styled";
import Fade from "react-reveal/Fade";
import AliceCarousel from "react-alice-carousel";
export default function Skills() {
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

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    768: { items: 3 },
    1024: { items: 3 },
  };
  return (
    <SkillArea>
      <section className="hab">
        <AliceCarousel
          mouseTracking
          items={items}
          disableDotsControls={true}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </section>
    </SkillArea>
  );
}
