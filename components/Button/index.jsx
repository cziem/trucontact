import React from "react";
import PropTypes from "prop-types";
import { ButtonStyles, AlternateButtonStyles } from "./styles";

const Button = ({
  type,
  text,
  icon,
  click,
  loading,
  disabled,
  alternate,
  ...otherProps
}) => {
  const buttonElements = (
    <span className={"text__icon"}>
      <span className="text">{text}</span>
      <span className={"icon"}>{icon}</span>
    </span>
  );

  return alternate ? (
    <AlternateButtonStyles
      type={type}
      onClick={click}
      hasIcon={!!icon}
      disabled={disabled}
      {...otherProps}
    >
      {loading ? <Loader /> : !icon ? text : buttonElements}
    </AlternateButtonStyles>
  ) : (
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
