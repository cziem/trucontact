import styled from "styled-components";

export const HeaderStyles = styled("div")`
  height: 68px;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100%;

  .headerBox {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 8rem;
    top: 0;
    height: 100%;
    z-index: 1000000;
    position: relative;

    .logo {
      width: 100px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    @media screen and (max-width: 480px) {
      padding: 0.5rem 2rem;
    }

    @media (max-width: 1110px) {
      background: ${({ showMenu }) => showMenu && "#364bac"};
      transition: ${({ showMenu }) => !showMenu && ".2s ease-in-out .2s"};
    }

    /* Media Query */
    @media screen and (min-width: 1111px) and (max-width: 1125px) {
      padding: 0.5rem 6rem;

      .navigation {
        a {
          font-size: 0.85rem;
        }
      }

      .wrapper {
        width: initial;
      }
    }
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media screen and (min-width: 1126px) {
      width: initial;
    }
  }

  .mobileSection {
    display: none;

    .icon-button {
      width: 2rem;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      cursor: pointer;
      transition: background 0.1s ease-in-out;

      &:hover {
        background: #ddd;
      }

      svg {
        font-size: 1.5rem;
        color: #fefefe;
      }
    }

    @media (max-width: 1110px) {
      display: flex;

      & > div:hover {
        background: ${({ showMenu }) => (showMenu ? "red" : "yellow")};
        /* background: ${({ showMenu }) =>
          showMenu ? "#b5f9fb0d" : "#eceae8"}; */
      }
      svg {
        fill: #fefefe;
      }
    }
  }

  .desktopSection {
    @media (max-width: 1110px) {
      position: absolute;
      width: 100%;
      top: 60px;
      left: 0;
      background-color: #364bac;
      margin: 0 auto;
      display: ${(props) => (props.showMenu === undefined ? "none" : "block")};
      animation: ${(props) =>
        props.showMenu
          ? "rollDown .2s ease-in-out forwards"
          : "rollUp .2s  ease-in-out forwards"};

      .navigation {
        ul {
          flex-direction: column;

          a {
            padding: 0.75rem;
          }
        }
        flex-direction: column;

        button {
          margin-top: 1rem;
        }
      }
    }
  }

  .navigation {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
    }

    a {
      color: #fff;
      font-size: 1rem;
      font-weight: 500;
      padding: 1.1rem;
      transition: color 0.2s ease-in;
    }

    a:hover {
      color: ${({ theme }) => theme.palette.primary.main};
    }

    li {
      list-style: none;
    }
  }

  @keyframes rollDown {
    0% {
      height: 0;
      overflow: hidden;
      padding: 0px 0;
    }
    100% {
      padding: 20px 0;
      height: 350px;
      overflow: hidden;
    }
  }
  @keyframes rollUp {
    0% {
      height: 350px;
      overflow: hidden;
      padding: 20px 0;
    }
    100% {
      height: 0;
      overflow: hidden;
      padding: 0 0;
      visibility: hidden;
    }
  }
`;
