import React from "react";
import PropTypes from "prop-types";
import { CgArrowLongRight as RightArrowIcon } from "react-icons/cg";
import { BlogCardStyle } from "./styles";
import Button from "../Button";

const BlogCard = ({ title, text, image, btnText, date }) => {
  return (
    <BlogCardStyle image={image}>
      <div className="image_wrap">
        <div className="image" />
      </div>

      <div className="card_content">
        <p className="date">{date}</p>
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
    </BlogCardStyle>
  );
};

BlogCard.PropTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default BlogCard;
