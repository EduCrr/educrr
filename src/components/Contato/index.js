import React, { useState, useContext } from "react";
import { ContatoArea } from "./styled";
import emailjs from "emailjs-com";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import WhatsApp from "@material-ui/icons/WhatsApp";
import Close from "@material-ui/icons/Close";
import { OpenContext } from "../../OpenContext";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

export default function Contato() {
  const { setOpen } = useContext(OpenContext);
  const [openForm, setOpenForm] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  function handleOpenForm() {
    setOpenForm(!openForm);
    setOpen(false);
  }

  function handleForm(e) {
    setStatus("");
    e.preventDefault();
    if (!validate()) return;
    emailjs
      .sendForm(
        "service_8cpbo8a",
        "template_jg032uh",
        e.target,
        "user_pFI3Mb96DRORRWn1vgazi"
      )
      .then(
        (result) => {
          toast.success("Email enviado com sucesso!");
          setNome("");
          setEmail("");
          setPhone("");
          setMessage("");
          setStatus("");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  function validate() {
    if (!nome) return setStatus("Preencha o campo nome");
    if (!email) return setStatus("Preencha o campo Email");
    if (!phone) return setStatus("Preencha o campo Telefone");
    if (!message) return setStatus("Preencha o campo Mensagem");

    return true;
  }
  return (
    <>
      <ToastContainer autoClose={3000} />
      <ContatoArea open={openForm} onClick={() => setOpen(false)}>
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
            {status !== "" && <h4>{status}</h4>}
            <form onSubmit={handleForm}>
              <input
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome"
                type="text"
                name="name"
              />
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                name="email"
              />
              <InputMask
                mask="(99) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Telefone"
                type="text"
                name="phone"
              />
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
      </ContatoArea>
    </>
  );
}
