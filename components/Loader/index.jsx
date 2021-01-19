import React from "react";
import { LoaderBox } from "./styles";
import propTypes from "prop-types";

const Loader = (props) => {
  return (
    <LoaderBox {...props}>
      <div className={"spinner"} />
    </LoaderBox>
  );
};

Loader.propTypes = {
  size: propTypes.string,
  color: propTypes.string,
};

export default Loader;
