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
  @media (max-width: 1024px) {
    .conent .about {
      padding: 0px 15px;
      .right-about {
        width: 100%;
      }
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
  }
`;
