import styled from "styled-components";
import { Container } from "../../../components/Grids/Container";

export const OurPartnersStyles = styled(Container)`
  background-color: #f8f8f8;
  flex-direction: column;

  header {
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 1rem;

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
        left: -1.4rem;
        top: 38%;

        @media screen and (max-width: 1286px) {
          top: 30%;
        }
        @media screen and (max-width: 1064px) {
          top: 22%;
        }

        @media screen and (max-width: 1280px) {
          left: -13%;
        }
        @media screen and (max-width: 1256px) {
          left: -15%;
        }
        @media screen and (max-width: 1182px) {
          left: -22%;
        }
        @media screen and (max-width: 1140px) {
          left: -28%;
        }
        @media screen and (max-width: 1110px) {
          display: none;
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

  .brands {
    width: 100%;
    margin: 0 auto 4.5rem;
  }

  .cta {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 1.5rem auto;
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

  @media screen and (max-width: 1243px) {
    .brands {
      overflow: hidden;
    }
  }

  @media screen and (max-width: 1035px) {
    header {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 908px) {
    .cta {
      button {
        span.text,
        span.icon svg {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
