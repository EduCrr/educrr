import styled from "styled-components";

export const HomeArea = styled.div`
  .slider-primary {
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(rgba(2, 2, 2, 0.5), rgba(2, 2, 2, 0.5)),
      url("/assets/fundo1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .slider-text {
      height: inherit;
      display: flex;
      justify-content: flex-start;
      align-items: end;
      .inside {
        padding: 30px 0px;
        background-color: #242c2e;
        width: 50%;
        text-align: center;
        font-size: 40px;
        font-weight: bold;
      }
    }
  }
  .about {
    max-width: 1200px;
    margin: 4rem auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .right-about {
      width: 50%;
    }
  }
  .photos {
    max-width: 1200px;
    margin: 4rem auto;
    display: flex;
    align-items: center;

    .photo {
      width: 33%;
      img {
        height: 550px;
        transform: scale(0.9);
        object-fit: cover;
        width: 100%;
      }
    }
  }
  .hab {
    margin: 4rem auto;
    height: 90vh;
    width: 100%;
    background-image: linear-gradient(rgba(2, 2, 2, 0.3), rgba(2, 2, 2, 0.3)),
      url("assets/fundo4.jpg");
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
    background-color: #242c2e;
    display: flex;
    justify-content: flex-start;
    align-items: end;
    height: 90vh;
    width: 100%;
    transform: scale(0.9);
    object-fit: cover;
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
    background-color: #414748;
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
    margin-bottom: 4rem;
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
        }
      }
    }
  }
  .contact {
    height: 80vh;
    width: 100%;
    background-image: linear-gradient(rgba(2, 2, 2, 0.5), rgba(2, 2, 2, 0.5)),
      url("/assets/fundo5.jpg");
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 4rem auto;
    .contact-area {
      height: inherit;
      width: inherit;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;
