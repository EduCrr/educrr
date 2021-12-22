import styled from "styled-components";

export const HomeArea = styled.div`
  overflow-x: hidden;

  .about {
    max-width: 1200px;
    margin: 6rem auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .right-about {
      width: 50%;
    }
  }
  .photos {
    max-width: 1200px;
    margin: 6rem auto;
    display: flex;
    align-items: center;
    position: relative;
    .photo {
      width: 33%;
      transform: scale(0.9) !important;
      transition: all ease 0.4s !important;
      img {
        height: 550px;
        width: 100%;
      }
      .container {
        position: relative;
        height: 100%;
        width: 100%;
        .overlay {
          height: 100%;
          width: 100%;
          &:hover {
            opacity: 0.8;
            background-color: #11191b;
          }
        }
      }
    }
  }
  .hab {
    margin: 6rem auto;
    height: 90vh;
    width: 100%;
    background-image: linear-gradient(
        rgba(17, 25, 27, 0.1),
        rgba(17, 25, 27, 1)
      ),
      url("/assets/fundo6.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .alice-carousel {
      max-width: 1200px !important;
    }
    .alice-carousel .alice-carousel__next-btn-item,
    .alice-carousel__prev-btn-item {
      display: none !important;
    }
  }

  .hab-area {
    background-color: #11191b;
    display: flex;
    justify-content: flex-start;
    align-items: end;
    height: 90vh;
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.3s;
    h1 {
      padding: 0px 20px;
      z-index: 1;
    }

    &:hover {
      transform: scale(1);
    }
  }
  .alice-carousel .alice-carousel__next-btn-item,
  .alice-carousel__prev-btn-item {
    background-color: #182022;
    padding: 20px;
    span {
      margin-top: 20px;
      color: white !important;
      font-size: 20px;
    }
  }
  .projects {
    max-width: 1200px;
    overflow-x: hidden;
    margin: auto;
    margin-top: 6rem;
    margin-bottom: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left-side {
      width: 350px;
      margin-top: -25px;
    }
    .right-side {
      width: 850px;
      .port-area {
        img {
          margin-bottom: 25px;
          height: 500px;
          width: 100%;
          object-fit: none;
          cursor: pointer;
        }
      }
    }
  }
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
    .conent .about {
      padding: 0px 15px;
      .right-about {
        width: 100%;
      }
    }
    .hab-area,
    .hab {
      height: 70vh;
    }
    .projects {
      flex-direction: column;
      .left-side {
        width: auto;
        margin-bottom: 30px;
        text-align: center;
      }
      .right-side {
        width: 100%;
      }
    }
    .contact {
      height: 70vh;
    }
  }

  @media (max-width: 768px) {
    .right-about {
      padding: 0px 20px;
      width: auto !important ;
    }
    .photos {
      flex-direction: column;
      .photo {
        width: auto;
        height: auto;
      }
    }
    .port-area {
      img {
        object-fit: scale-down !important;
        height: auto !important;
      }
    }
  }
`;
