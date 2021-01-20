import styled from "styled-components";
import { Container } from "../../../components/Grids/Container";

export const OurServicesStyles = styled(Container)`
  background: red;
  background-color: #fff;
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
        left: -1.4rem;
        top: 38%;
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

  .service_gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.2rem;
    row-gap: 2rem;
    grid-template-rows: repeat(1, 1fr);
  }
`;
