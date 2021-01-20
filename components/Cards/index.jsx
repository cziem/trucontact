import React from "react";
import PropTypes from "prop-types";
import { CgArrowLongRight as RightArrowIcon } from "react-icons/cg";
import Button from "../Button";
import { CardStyles } from "./styles";

const Card = ({ title, image, text, btnText }) => {
  return (
    <CardStyles image={image}>
      <div className="image_wrap">
        <div className="image" />
      </div>

      <div className="card_content">
        <p className="title">{title}</p>

        <p>{text}</p>

        <Button
          alternate
          size="lg"
          text={btnText}
          type="button"
          icon={<RightArrowIcon />}
        />
      </div>
    </CardStyles>
  );
};

Card.PropTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
