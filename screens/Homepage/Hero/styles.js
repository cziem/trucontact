import styled from "styled-components";
import HeroBNG from "../../../assets/images/hero_bng_1.jpg";

export const HeroStyles = styled("div")`
  background: url(${HeroBNG}) center no-repeat;
  background-size: cover;
  height: 110vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1rem 8rem;

  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgb(19, 14, 37);
    background: linear-gradient(
      74deg,
      rgba(19, 14, 37, 1) 0%,
      rgba(20, 14, 37, 1) 33%,
      rgba(40, 35, 56, 0.9220063025210083) 56%,
      rgba(255, 255, 255, 0.1741071428571429) 100%
    );
  }

  section {
    width: 100%;
    z-index: 1000;

    .info {
      width: 45%;
      margin-bottom: 1.5rem;

      h3 {
        color: ${({ color, theme }) =>
          color ? color : theme.palette.grey[200]};
        font-weight: 700;
        line-height: 1.2;
        font-size: 3.7rem;
      }

      h4 {
        padding-bottom: 1rem;
        color: ${({ color, theme }) =>
          color ? color : theme.palette.grey[300]};
        font-style: italic;
        font-size: 2.9rem;
      }

      p {
        color: ${({ color, theme }) =>
          color ? color : theme.palette.grey[300]};
        padding: 2rem 0;
        font-size: 1.2rem;
        line-height: 1.5;
        text-align: justify;
      }

      @media (min-width: 830px) and (max-width: 1210px) {
        width: 80%;
      }

      @media (min-width: 650px) and (max-width: 829px) {
        width: 90%;

        h3 {
          line-height: 1;
        }
      }

      @media (max-width: 649px) {
        width: 100%;

        h3 {
          line-height: 1;
        }
      }

      @media (max-width: 480px) {
        text-align: center;

        h3 {
          font-size: 2rem;
          font-weight: 600;
        }
      }
    }

    /* Hero Button */
    button {
      svg {
        top: 0.3rem;
        position: relative;
      }
    }

    /* Media Query */
    @media (max-width: 480px) {
      display: flex;
      flex-direction: column;
      justify-content: center;

      button {
        margin: 0 auto;
      }
    }
  }

  /* Carousel Counter */
  .carousel_count {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 1.5rem;
    width: 30%;

    .counter {
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      border: 2px solid #4cb952;
      margin: 0 0.3rem;
    }

    .active {
      background-color: #4cb952;
    }
  }

  @media (max-width: 649px) {
    padding: 0 3rem;
  }
`;
