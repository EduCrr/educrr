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
  .menu-area {
    width: 35%;
    z-index: ${(props) => (props.open ? "999" : "-1")};

    ul {
      margin: 0;
      padding: 0;
    }
    ul li {
      margin: 30px auto;
      list-style-type: none;
    }
    ul a {
      color: white;
      font-size: 20px;
      text-decoration: none;
      transition: all ease 0.1s;
      &:hover {
        color: #5b916f;
        transition: all ease 0.3s;
      }
    }
  }
  .icons {
    a {
      margin: 0px 10px;
      color: white;
    }
  }
`;
