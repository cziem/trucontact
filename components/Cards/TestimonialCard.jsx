import React from "react";
import PropTypes from "prop-types";
import { TestimonialCardStyles } from "./styles";

const TestimonialCard = ({ image, text, name, position }) => {
  return (
    <TestimonialCardStyles image={image}>
      <div className="image_wrap">
        <div className="image" />
      </div>

      <div className="card_content">
        <p className="text">{text}</p>
        <p className="name">{name}</p>
        <p className="position">{position}</p>
      </div>
    </TestimonialCardStyles>
  );
};

TestimonialCard.PropTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TestimonialCard;
