import React from "react";
import { CgArrowLongRight as RightArrowIcon } from "react-icons/cg";
import { ProjectStyles } from "./styles";
import { ourProjectList } from "./data";
import ProjectCard from "../../../components/Cards/ProjectCard";
import { generateID } from "../../../lib/helpers";
import Button from "../../../components/Button";

const Projects = () => {
  return (
    <ProjectStyles>
      <header>
        <h2 className="title">Our Projects</h2>
      </header>

      <section className="project_gallery">
        {ourProjectList.map((item) => (
          <ProjectCard key={generateID(12)} {...item} />
        ))}
      </section>

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
