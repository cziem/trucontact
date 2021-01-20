import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  padding: ${({ padding }) => (padding ? padding : "1rem 8rem")};
`;
