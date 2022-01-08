import styled from "styled-components";

export const SkillArea = styled.div`
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
  }

  .hab-area {
    background-color: #11191b;

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
  @media (max-width: 1024px) {
    .hab-area,
    .hab {
      height: 70vh;
    }
  }
`;
