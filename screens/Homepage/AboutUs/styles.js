import styled from "styled-components";
import { Container } from "../../../components/Grids/Container";
import COVID_IMAGE from "../../../assets/images/covid_19.jpg";
import OFFICE_IMAGE from "../../../assets/images/office.jpg";

export const AboutUsStyles = styled(Container)`
  background-color: #f8f8f8;
  flex-direction: column;
  padding: 1rem 12rem 4rem;

  header {
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 2rem;

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
        left: -0.4rem;
        top: 30%;

        @media screen and (max-width: 1303px) {
          top: 25%;
        }
        @media screen and (max-width: 1064px) {
          top: 22%;
        }

        @media screen and (max-width: 1230px) {
          left: -6%;
        }
        @media screen and (max-width: 1138px) {
          left: -15%;
        }
        @media screen and (max-width: 954px) {
          left: -15%;
        }
      }
    }

    .lead_text {
      color: #333;
      padding: 2rem 0;
      font-size: 1.2rem;
      line-height: 1.5;
      text-align: justify;
    }
  }

  .main {
    margin-bottom: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 4.5rem;

    .image_wrap {
      height: 20rem;
      width: 18rem;
    }

    .image {
      background: url(${COVID_IMAGE}) center no-repeat;
      background-size: cover;
      border-top-left-radius: 20%;
      height: 100%;
      width: 100%;
      box-shadow: 5px 10px 40px -10px rgba(0, 0, 0, 0.5);
    }

    .article_title {
      color: #364bac;
      padding-bottom: 1.5rem;
    }
  }

  .sub_main {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 4.5rem;
    margin-top: 1rem;

    .image_wrap {
      height: 200px;
      width: 18rem;
      display: flex;
      justify-content: flex-end;
    }

    .image {
      background: url(${OFFICE_IMAGE}) right no-repeat;
      background-size: cover;
      border-bottom-left-radius: 20%;
      width: 80%;
      height: 100%;
    }

    article {
      height: 100%;
      position: relative;

      button {
        margin-top: 1rem;
      }
    }
  }

  /* General Padding */
  @media screen and (max-width: 910px) {
    & {
      padding: 1rem 2rem 3rem;
    }
  }
  @media screen and (min-width: 911px) and (max-width: 1035px) {
    & {
      padding: 1rem 6rem 3rem;
    }
  }

  @media screen and (max-width: 460px) {
    & {
      padding: 1rem;
    }
  }

  @media screen and (max-width: 1035px) {
    header {
      display: flex;
      flex-direction: column;

      .title {
        &::before {
          display: none;
        }
      }
    }
  }

  @media screen and (max-width: 1242px) {
    .main article,
    .sub_main article {
      p {
        font-size: 1.1rem;
      }
    }

    .sub_main article button {
      span.text,
      span.icon svg {
        font-size: 1.3rem;
      }
    }
  }

  @media screen and (max-width: 1138px) {
    .main,
    .sub_main {
      grid-column-gap: 1.5rem;
    }

    .main .image_wrap,
    .sub_main .image_wrap {
      height: auto;
    }

    .main .article_title {
      padding-bottom: 0.65rem;
    }
  }

  @media screen and (max-width: 634px) {
    .main,
    .sub_main {
      display: flex;
      flex-direction: column;
    }

    .main .image_wrap,
    .sub_main .image_wrap {
      display: none;
    }

    .main .article_title {
      padding-bottom: 0.65rem;
    }
  }
`;
