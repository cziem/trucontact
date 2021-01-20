import styled from "styled-components";

export const HeaderStyles = styled("div")`
  width: 100%;
  display: flex;
  background: transparent;
  background: ${({ position }) => (position < 100 ? "transparent" : "#364bac")};
  /* position: fixed; */
  z-index: 100000;

  .container {
    width: 100%;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    width: 100px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .navigation {
    width: 80%;
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
`;
