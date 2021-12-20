import styled from "styled-components";

export const FooterArea = styled.footer`
  margin: auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .right-footer {
    a {
      margin: 0px 10px;
      color: white;
    }
  }
  @media (max-width: 550px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;
