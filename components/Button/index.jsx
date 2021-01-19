import React from "react";
import PropTypes from "prop-types";
import { ButtonStyles } from "./styles";

const Button = ({
  type,
  text,
  loading,
  disabled,
  click,
  icon,
  ...otherProps
}) => {
  const buttonElements = (
    <span className={"text__icon"}>
      <span>{text}</span>
      <span className={"icon"}>{icon}</span>
    </span>
  );

  return (
    <ButtonStyles
      type={type}
      onClick={click}
      hasIcon={!!icon}
      disabled={disabled}
      {...otherProps}
    >
      {loading ? <Loader /> : !icon ? text : buttonElements}
    </ButtonStyles>
  );
};

Button.PropTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.string,
  click: PropTypes.func,
  icon: PropTypes.any,
};

export default Button;
