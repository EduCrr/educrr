import styled from "styled-components";

export const HeaderArea = styled.header`
  .content {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: "10px 0px";
    background-color: transparent;
    transition: all ease 0.4s;
    max-width: 1200px;
    margin: ${(props) => (props.black ? "1rem auto" : "2rem auto")};

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
  @media (max-width: 1204px) {
    .content {
      padding: 0px 20px;
    }
    .menu-area {
      width: 100%;
    }
  }
  @media (max-width: 375px) {
    .menu-area {
      width: 100%;
    }
  }
`;
