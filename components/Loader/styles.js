import styled from "styled-components";

const variantSize = (size, defSize) =>
  size
    ? size === "sm"
      ? "18px"
      : size === "md"
      ? "25px"
      : size === "lg"
      ? "45px"
      : ""
    : defSize;

const variantBorderSize = (size) =>
  size
    ? size === "sm"
      ? "1.5px solid #FFF"
      : size === "md"
      ? "2px solid #FFF"
      : size === "lg"
      ? "4px solid #FFF"
      : ""
    : "3px solid #FFF";

const variantBorderTopSize = (size, color) =>
  size
    ? size === "sm"
      ? `1.5px solid ${color ? color : "#3498DB"}`
      : size === "md"
      ? `2px solid ${color ? color : "#3498DB"}`
      : size === "lg"
      ? `4px solid ${color ? color : "#3498DB"}`
      : ""
    : `3px solid ${color ? color : "#3498DB"}`;

export const LoaderBox = styled("div")`
  width: ${({ fullPage }) => (fullPage ? "100%" : "max-content")};
  height: ${({ fullPage }) => (fullPage ? "100vh" : "auto")};
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner {
    border: ${({ size }) => variantBorderSize(size)};
    border-top: ${({ size, color }) => variantBorderTopSize(size, color)};
    border-radius: 50%;
    width: ${({ size }) => variantSize(size, "30px")};
    height: ${({ size }) => variantSize(size, "30px")};
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
