import styled from "styled-components";
import { Container } from "../../../components/Grids/Container";

export const BlogStyles = styled(Container)`
  background-color: #fff;
  flex-direction: column;

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
`;
