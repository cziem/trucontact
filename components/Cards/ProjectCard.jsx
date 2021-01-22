import React from "react";
import PropTypes from "prop-types";
import { ProjectCardStyles } from "./styles";

const ProjectCard = ({ image, title, text }) => {
  return (
    <ProjectCardStyles image={image}>
      <div className="wrapper">
        <div className="overlay" />
      </div>
      <div className="card_content">
        <p className="title">{title}</p>

        <p>{text}</p>
      </div>
    </ProjectCardStyles>
  );
};

ProjectCard.PropTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectCard;
