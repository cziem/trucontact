import styled from "styled-components";

export const Container = styled("div")`
  background: transparent;
  display: flex;
  padding: ${({ padding }) => (padding ? padding : "1rem 8rem")};
`;
