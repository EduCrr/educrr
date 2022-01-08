import React, { useState } from "react";
import { SkillArea } from "./styled";
import Fade from "react-reveal/Fade";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Skills() {
  const [icons, setIcons] = useState([
    { title: "Conhecimentos:", icon: "/assets/knowledge.png" },
    { title: "Html", icon: "/assets/html.png" },
    { title: "Css", icon: "/assets/css.png" },
    { title: "JavaScript", icon: "/assets/js.png" },
    { title: "TypeScript", icon: "/assets/type.jpg" },
    { title: "React Js", icon: "/assets/react.png" },
    { title: "Bootstrap ", icon: "/assets/bootstrap.png" },
    { title: "Sass", icon: "/assets/sass.png" },
    { title: "Webpack", icon: "/assets/webpack.png" },
    { title: "Firebase", icon: "/assets/firebase.png" },
    { title: "Git", icon: "/assets/git.png" },
    { title: "Figma", icon: "/assets/figma.png" },
  ]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SkillArea>
      <section className="hab">
        <Slider {...settings}>
          {icons.map((item, k) => (
            <Fade bottom cascade duration={900}>
              <div className="hab-area" key={k}>
                <div className="container">
                  <h1>{item.title}</h1>
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
          ))}
        </Slider>
      </section>
    </SkillArea>
  );
}
