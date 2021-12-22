import styled from "styled-components";

export const PortfolioArea = styled.div`
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
  @media (max-width: 1024px) {
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
  }

  @media (max-width: 768px) {
    .port-area {
      img {
        object-fit: scale-down !important;
        height: auto !important;
      }
    }
  }
`;
