import styled from "styled-components";

export const SliderArea = styled.div`
  .slideshow {
    width: 100%;
    background-position: center;
    background-size: cover;
    height: 100vh;
    animation: myAnim 30s ease 0s infinite alternate-reverse forwards;
    background-image: url("/assets/fundo7.jpg");
  }

  @keyframes myAnim {
    0% {
      background-position: 50% 100%;
    }

    100% {
      background-position: 50% 0%;
    }
  }
  .slider-text {
    height: inherit;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    .inside {
      padding: 25px 0px;
      background-color: #11191b;
      transition: all ease 0.4s;
      width: 50%;
      font-size: 35px;
      font-weight: bold;
      text-align: center;
      .desc {
        display: flex;
        flex-direction: column;
        margin: auto;
      }
      small {
        font-size: 17px;
      }
    }
  }

  @media (max-width: 768px) {
    .slider-text {
      .inside {
        width: 100% !important;
        font-size: 30px !important;
      }
    }
  }
`;
