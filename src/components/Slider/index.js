import React, { useState } from "react";
import { SliderArea } from "./styled";
export default function Slider() {
  const [sliders, setSliders] = useState([
    {
      img: "/assets/fundo1.jpg",
      name: "Eduardo Eugênio Carraro",
      job: " Front-end Developer",
    },
    {
      img: "/assets/fundo4.jpg",
      name: "Eduardo Eugênio Carraro",
      job: " Front-end Developer",
    },
    {
      img: "/assets/fundo3.jpg",
      name: "Eduardo Eugênio Carraro",
      job: " Front-end Developer",
    },
  ]);
  return (
    <SliderArea>
      <div className="slideshow">
        {sliders.map((item, k) => (
          <div className="slideshow-item" key={k}>
            <img src={item.img} alt="Photo" alt="" />
            <div className="slider-text">
              <div className="inside">
                <div className="desc">
                  <small>{item.name}</small>
                  {item.job}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SliderArea>
  );
}
