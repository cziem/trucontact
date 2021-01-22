import styled from "styled-components";

export const BrandsStyles = styled("div")`
  .brand_styles_sub_div {
    width: 100%;
    overflow: hidden;

    .scroll_brand {
      animation: scroll 14s 1 ease;
    }

    .brands_main_cover {
      display: flex;
      flex-direction: column;
      width: max-content;
      position: relative;
      left: 0;
      /* :hover {
        animation: scroll 14s 1 ease;
      } */

      .brands_sub_cover {
        width: max-content;
        display: flex;
        .brand_item {
          height: 120px;
          width: 200px;
          padding: 20px 25px;
          background-color: #fff;
          margin: 1rem 1.2rem;
          border-radius: 3px;
          box-shadow: 0px 13px 20px 10px rgb(0 0 0 / 10%);

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }
  }

  /* @media screen and (max-width: 1243px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem 2rem;

    .brand_item {
      width: 100%;
      height: auto;
    }
  } */

  @keyframes scroll {
    0%,
    100% {
      left: 0;
    }
    50% {
      left: -2000px;
    }
  }
`;
