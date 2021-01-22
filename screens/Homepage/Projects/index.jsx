import React from "react";
import { CgArrowLongRight as RightArrowIcon } from "react-icons/cg";
import Button from "../../../components/Button";
import ProjectCard from "../../../components/Cards/ProjectCard";
import { generateID } from "../../../lib/helpers";
import { ourProjectList } from "./data";
import { ProjectStyles } from "./styles";

const Projects = () => {
  return (
    <ProjectStyles>
      <header>
        <h2 className="title">Our Projects</h2>
      </header>

      <div className="overflow_wrapper">
        <section className="project_gallery">
          {ourProjectList.map((item) => (
            <ProjectCard key={generateID(12)} {...item} />
          ))}
        </section>
      </div>

      <div className="cta">
        <Button
          type="button"
          text="View all project"
          icon={<RightArrowIcon />}
        />
      </div>
    </ProjectStyles>
  );
};

export default Projects;
