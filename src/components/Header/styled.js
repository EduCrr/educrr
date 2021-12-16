import styled from "styled-components";

export const HeaderArea = styled.header`
  width: 1200px;
  margin: auto;
  .content {
    margin-top: 35px;
    position: fixed;
    width: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;

    .logo {
      flex: 1;
      font-size: 40px;
    }
  }
`;
