import React from "react";
import { ModalArea } from "./styled";
import Close from "@material-ui/icons/Close";
import Bounce from "react-reveal/Bounce";
export default function Modal({ data, close, open }) {
  return (
    <ModalArea open={open}>
      <div class="modal">
        <Bounce top when={open}>
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
        </Bounce>
      </div>

      <div class="modal-overlay"></div>
    </ModalArea>
  );
}
