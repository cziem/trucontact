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
    right: 25%;
    min-width: 150%;
    display: flex;
    justify-content: center;
    transition: left 0.35s ease-in;

    & > div {
      transition: margin 0.35s ease-in;
      :first-child:hover {
        margin-left: 35.5%;
      }
      :last-child:hover {
        margin-right: 700px;
      }
    }
    @media (max-width: 1350px) and (min-width: 1200px) {
      & > div {
        width: 450px;
        min-width: 450px;
        :first-child:hover {
          margin-left: 35%;
        }
        :last-child:hover {
          margin-right: 650px;
        }
      }
    }
    @media (max-width: 1200px) and (min-width: 1100px) {
      & > div {
        width: 450px;
        min-width: 450px;
        :first-child:hover {
          margin-left: 45%;
        }
        :last-child:hover {
          margin-right: 720px;
        }
      }
    }
    @media (max-width: 1100px) {
      & > div {
        width: 420px;
        min-width: 420px;
        :first-child:hover {
          margin-left: 50%;
        }
      }
    }
    @media (min-width: 855px) and (max-width: 932px) {
      & > div {
        width: 380px;
        min-width: 380px;
        :first-child:hover {
          margin-left: 48%;
        }
        :last-child:hover {
          margin-right: 48%;
        }
      }
    }
    @media (min-width: 799px) and (max-width: 854px) {
      & > div {
        width: 350px;
        min-width: 350px;
        .title {
          font-size: 2.48rem;
        }
        :first-child:hover {
          margin-left: 56%;
        }
        :last-child:hover {
          margin-right: 56%;
        }
      }
    }
    @media (min-width: 699px) and (max-width: 798px) {
      & > div {
        width: 300px;
        min-width: 300px;
        .title {
          font-size: 2.28rem;
        }
        :first-child:hover {
          margin-left: 52%;
        }
        :last-child:hover {
          margin-right: 52%;
        }
      }
    }
    @media (min-width: 587px) and (max-width: 698px) {
      right: -10%;
      & > div {
        width: 380px;
        min-width: 380px;
        .title {
          font-size: 2.28rem;
        }
        :first-child:hover {
          margin-left: 69%;
        }
        :nth-child(3):hover {
          margin-right: 70%;
        }
      }
    }
    @media (min-width: 558px) and (max-width: 586px) {
      right: -10%;
      & > div {
        width: 380px;
        min-width: 380px;
        .title {
          font-size: 2.28rem;
        }
        :first-child:hover {
          margin-left: 76%;
        }
        :nth-child(3):hover {
          margin-right: 70%;
        }
      }
    }
    @media (min-width: 514px) and (max-width: 557px) {
      right: -15%;
      & > div {
        width: 380px;
        min-width: 380px;
        .title {
          font-size: 2.28rem;
        }
        :first-child:hover {
          margin-left: 86%;
        }
        :nth-child(3):hover {
          margin-right: 85%;
        }
      }
    }

    @media (max-width: 513px) {
      flex-direction: column;
      right: 0;
      align-items: center;
      min-width: 100%;

      & > div {
        :first-child:hover {
          margin: 0;
        }
        :last-child:hover {
          margin: 0;
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
