import styled from "styled-components";

export const CardStyles = styled("div")`
  width: 100%;

  .image_wrap {
    width: 100%;
    height: 300px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    overflow: hidden;

    .image {
      width: 100%;
      height: 100%;
      background: ${({ image }) => image && `url(${image}) no-repeat`};
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      background-size: cover;
      background-position: center;
      transition: transform 0.35s ease-in;

      &:hover {
        transform: scale(1.25);
      }
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

export const BlogCardStyle = styled("div")`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1.2rem 1rem;

  &:last-child {
    margin-bottom: 3rem;
  }

  .image_wrap {
    width: 100%;
    height: 400px;

    .image {
      width: 100%;
      height: 100%;
      background: ${({ image }) => image && `url(${image}) no-repeat`};
      background-size: cover;
      background-position: center;
    }
  }

  .card_content {
    background: #f8f8f8;
    padding: 1.5rem 2rem;
    position: relative;

    .date {
      color: #999;
    }

    .title {
      color: #364bac;
      padding-bottom: 1rem;
      font-size: 1.65rem;
      font-weight: 500;
      text-transform: capitalize;
    }

    p {
      /* color: #dedede; */
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

export const ProjectCardStyles = styled("div")`
  height: 110vh;
  width: 500px;
  background: ${({ image }) => image && `url(${image}) no-repeat`};
  background-size: cover;
  background-position: center;
  position: relative;

  .overlay {
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.62);
    position: absolute;
  }

  .card_content {
    z-index: 1000;
    position: relative;
    padding: 5rem 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
      color: #fff;
      font-size: 2.8rem;
      font-weight: 600;
      margin-bottom: 1rem;
      line-height: 1.2;
    }

    p {
      color: #fff;
    }
  }
`;

export const TestimonialCardStyles = styled("div")`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 1.5rem;
  padding: 0 5rem;

  .image_wrap {
    width: 13rem;
    height: 14rem;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;

    .image {
      width: 100%;
      height: 100%;
      background: ${({ image }) => image && `url(${image}) no-repeat`};
      background-size: cover;
      background-position: center top;
      border-top-left-radius: 20%;
      box-shadow: 5px 10px 40px -10px rgba(0, 0, 0, 0.5);
    }
  }

  .card_content {
    padding: 0 1.5rem;
    position: relative;
    height: 100%;
    width: 100%;

    .text {
      padding-bottom: 2.2rem;
      font-size: 1.35rem;
      font-weight: 300;
      position: relative;
    }

    .name {
      color: #364bac;
      font-weight: 500;
      text-transform: uppercase;
    }

    .position {
      color: #ababab;
      font-weight: 500;
      font-size: 0.87rem;
    }
  }
`;
