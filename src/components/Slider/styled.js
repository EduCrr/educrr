import styled from "styled-components";

export const SliderArea = styled.div`
  .slideshow {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }

  .slideshow-item {
    width: inherit;
    height: inherit;
    position: absolute;
    animation: cyclesImages 31s infinite;
    opacity: 0;

    img {
      background-image: linear-gradient(
        rgba(17, 25, 27, 0.1),
        rgba(17, 25, 27, 1)
      ) !important;
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
  .slideshow-item img {
    width: 100%;
    height: 100%;
    animation: zoom 31s infinite;
    object-fit: cover;
    img {
      background-image: linear-gradient(
        rgba(17, 25, 27, 0.1),
        rgba(17, 25, 27, 1)
      ) !important;
    }
  }
  .slideshow-item:nth-child(1),
  .slideshow-item:nth-child(1) img {
    animation-delay: 0s;
  }
  .slideshow-item:nth-child(2),
  .slideshow-item:nth-child(2) img {
    animation-delay: 10s;
  }
  .slideshow-item:nth-child(3),
  .slideshow-item:nth-child(3) img {
    animation-delay: 20s;
  }

  @keyframes cyclesImages {
    25% {
      opacity: 1;
    }

    40% {
      opacity: 0;
    }
  }

  @keyframes zoom {
    100% {
      transform: scale(1.4);
    }
  }
  @media (max-width: 768px) {
    .slider-text {
      .inside {
        width: 70% !important;
      }
    }
  }
  @media (max-width: 375px) {
    .slider-text {
      .inside {
        width: 100% !important;
        font-size: 30px !important;
      }
    }
  }
`;
