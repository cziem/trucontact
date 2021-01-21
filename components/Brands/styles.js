import styled from "styled-components";

export const BrandsStyles = styled("div")`
  display: flex;
  flex-wrap: wrap;

  .brand_item {
    height: 120px;
    width: 21.111%;
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
`;
