import styled from "styled-components";

export const ContatoArea = styled.div`
  .contact {
    height: 80vh;
    width: 100%;
    background-image: linear-gradient(
        rgba(17, 25, 27, 0.4),
        rgba(17, 25, 27, 1)
      ),
      url("/assets/fundo5.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 6rem auto 2rem auto;
    .contact-area {
      height: inherit;
      width: inherit;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      button {
        margin-top: 15px;
      }
    }
  }

  .inputs-email {
    z-index: ${(props) => (props.open ? "999" : "-1")};
    width: 100%;
    input,
    textarea {
      font-family: "Readex Pro", sans-serif;
      font-weight: bold;
      width: 80%;
      cursor: pointer;
      margin-bottom: 20px;
      border: 0px;
      outline: 0;
      background-color: #182022;
      padding: 20px;
      color: white;
      ::placeholder {
        color: white;
      }
      &:hover {
        background: rgb(17, 25, 27);
        background: linear-gradient(
          18deg,
          rgba(17, 25, 27, 1) 39%,
          rgba(24, 32, 34, 1) 66%
        );
      }
    }
    textarea {
      resize: none;
    }
    input,
    textarea,
    button,
    svg,
    i {
      transition: all ease 0.4s;
    }
    button {
      background-color: #182022;
      &:hover {
        background: rgb(17, 25, 27);
        background: linear-gradient(
          18deg,
          rgba(17, 25, 27, 1) 39%,
          rgba(24, 32, 34, 1) 66%
        );
      }
    }
  }
  .phone,
  svg,
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
    svg {
      font-size: 30px;
    }
  }
  @media (max-width: 1024px) {
    .contact {
      height: 70vh;
    }
  }
`;
