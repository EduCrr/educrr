import React from "react";
import { ModalArea } from "./styled";
import GitHub from "@material-ui/icons/GitHub";
import Close from "@material-ui/icons/Close";
export default function Modal({ data, close }) {
  return (
    <ModalArea>
      <div class="modal">
        <div onClick={() => close(false)} className="close-modal">
          <Close />
        </div>
        <h1>{data.title} </h1>
        <img src={data.image} />
        <p>{data.desc}</p>
        <h4>{data.tools}</h4>
        <div className="btns">
          <a href="/">Veja Mais</a>
          <a href="/">GitHub</a>
        </div>
      </div>
      <div class="modal-overlay"></div>
    </ModalArea>
  );
}
