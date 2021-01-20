import styled from "styled-components";

export const CardStyles = styled("div")`
  width: 100%;

  .image_wrap {
    width: 100%;
    height: 300px;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;

    .image {
      width: 100%;
      height: 100%;
      background: ${({ image }) => image && `url(${image}) no-repeat`};
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      background-size: cover;
      background-position: center;
    }
  }

  .card_content {
    background: #364bac;
    padding: 1.5rem 2rem;
    position: relative;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    height: 350px;

    .title {
      color: #fff;
      padding-bottom: 1rem;
      font-size: 1.35rem;
      font-weight: 500;
      text-transform: capitalize;
    }

    p {
      color: #dedede;
      text-align: justify;
      padding-bottom: 2.5rem;
    }

    button {
      position: absolute;
      right: 1.5rem;
      bottom: 8%;

      span.text {
        font-size: 1.3rem;
      }
    }
  }
`;
