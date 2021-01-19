import styled from "styled-components";

export const FooterStyles = styled("div")`
  background-color: #364bac;
  padding: 1.5rem 0 8rem;

  .content_wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .heading {
    text-transform: uppercase;
    color: #fff;
    font-weight: 500;
    font-size: 1.5rem;
  }

  .footer-items-list {
    margin: 0;

    a {
      color: #fff;
      font-size: 1.1rem;
      font-weight: 300;
      transition: color 0.2s ease-in;

      &:hover {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }

    li {
      list-style: none;
      padding: 0.5rem 0;
    }
  }

  .address {
    .address_info {
      .title {
        text-transform: uppercase;
        font-size: 1.1rem;
      }
      p {
        color: #fff;
        width: 100%;
        line-height: 2;
        text-align: right;
        font-size: 0.89rem;
      }
    }

    .social_info {
      display: flex;
      justify-content: flex-end;
      padding: 1.5rem 0;

      a {
        background-color: #fff;
        color: #364bac;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        margin: 0 0.5rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;

        svg {
          font-size: 1.25rem;
        }
      }
    }
  }
`;
