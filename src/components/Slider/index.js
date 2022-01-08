import React, { useState } from "react";
import { SliderArea } from "./styled";
export default function Slider() {
  return (
    <SliderArea>
      <div className="slideshow">
        <div className="slideshow-item">
          <div className="slider-text">
            <div className="inside">
              <div className="desc">
                <small>Eduardo Eugênio Carraro</small>
                Front-end Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </SliderArea>
  );
}
