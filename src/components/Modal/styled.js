import styled from "styled-components";

export const ModalArea = styled.div`
  .modal {
    opacity: ${(props) => (props.open ? "1" : "0")};
    z-index: ${(props) => (props.open ? "9999" : "-99")};
    transition: all ease 0.4s;
    overflow: hidden;
    overflow-y: scroll;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    width: 80%;
    height: 60%;
    background-color: #182022;
    padding: 6rem;
    border-radius: 5px;
    box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
    h4 {
      margin-bottom: 45px;
    }
    .btns {
      a {
        font-size: 16px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        outline: 0;
        background-color: #40ba63;
        color: white;
        margin-right: 30px;
        text-decoration: none;
      }
    }
    .close-modal {
      position: absolute;
      top: 1.2rem;
      right: 2rem;
      font-size: 5rem;
      color: #333;
      cursor: pointer;
      border: none;
      background: none;
    }
    svg,
    i {
      color: white;
      opacity: 1;
      font-size: 30px;
    }
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
    transition: all ease 0.4s;
    opacity: ${(props) => (props.open ? "1" : "0")};
    z-index: ${(props) => (props.open ? "5" : "-100")};
  }
`;
