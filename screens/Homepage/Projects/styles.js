import styled from "styled-components";

export const ProjectStyles = styled("div")`
  background-color: #fff;

  header {
    display: flex;
    width: 100%;
    margin-bottom: 2rem;
    justify-content: center;

    .title {
      color: #364bac;
      display: flex;
      padding-top: 2.12rem;
      font-weight: 500;
      font-size: 1.5rem;
      position: relative;
      justify-content: center;
      text-transform: uppercase;

      &::before {
        content: "";
        position: absolute;
        width: 2.65rem;
        height: 0.2rem;
        background-color: #364bac;
        left: -3.5rem;
        top: 75%;
      }
    }
  }

  .overflow_wrapper {
    overflow: hidden;
    width: 100%;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .project_gallery {
    position: relative;
    /* left: -28%; */
    right: 28%;
    /* width: max-content; */
    min-width: 2100px;
    display: flex;
    justify-content: center;
    /* grid-template-columns: repeat(4, 1fr); */
    /* column-gap: 1.55rem; */
    transition: left 0.35s ease-in;
    & > div {
      transition: margin 0.35s ease-in;
      :first-child:hover {
        margin-left: 700px;
      }
      :last-child:hover {
        margin-right: 700px;
      }
    }
    @media (max-width: 1350px) {
      right: 30%;
      & > div {
        width: 450px;
        min-width: 450px;
        :first-child:hover {
          margin-left: 555px;
        }
        :last-child:hover {
          margin-right: 555px;
        }
      }
    }
  }

  .cta {
    padding: 2rem 1.5rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      .text,
      .icon svg {
        font-size: 1.8rem;
      }
    }
  }

  @media screen and (max-width: 455px) {
    .cta {
      button {
        span.text,
        span.icon svg {
          font-size: 1.3rem;
        }
      }
    }
  }
`;
