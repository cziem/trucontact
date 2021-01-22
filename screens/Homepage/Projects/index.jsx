import React, { createRef, useState, useEffect } from "react";
import { CgArrowLongRight as RightArrowIcon } from "react-icons/cg";
import { ProjectStyles } from "./styles";
import { ourProjectList } from "./data";
import ProjectCard from "../../../components/Cards/ProjectCard";
import { generateID } from "../../../lib/helpers";
import Button from "../../../components/Button";

const Projects = () => {
  const scrollEl = createRef();

  const handleScroll = () => {
    // console.log(scrollEl, "element");
    // console.log(scrollEl.current.offsetWidth, "elment");

    let value = scrollEl.current.offsetWidth;
    let windowWidth = scrollEl.current.clientWidth;
    // scrollEl.current.scrollLeft += scrollEl.current.clientWidth;

    let parentEl = scrollEl.current.offsetParent;
    // parentEl.style.left = 0;

    console.log(parentEl, "parent");

    // console.log(value - window.innerWidth, "dir");

    // scrollEl.current.scrollLeft -= scrollEl.current.offsetWidth;
    // scrollEl.current.scrollWidth -= scrollEl.current.offsetWidth;

    // direction === "left" &&
    //   (scrollEl.current.scrollLeft -= scrollEl.current.clientWidth);
    // direction === "right" &&
    //   (scrollEl.current.scrollLeft += scrollEl.current.clientWidth);

    // setScrollLeftValue(scrollEl.current.scrollLeft);
    // setScrollLeftMaxtValue(
    //   scrollEl.current.scrollWidth - scrollEl.current.offsetWidth
    // );
  };

  // const handlePlainScroll = () => {
  //   try {
  //     const { scrollLeft } = cards.current;

  //     setScrollLeftValue(scrollLeft);
  //     setScrollLeftMaxtValue(
  //       cards.current.scrollWidth - cards.current.offsetWidth
  //     );
  //   } catch (err) {}
  // };

  // useEffect(() => {
  //   window.addEventListener("mouseenter", handlePlainScroll, { passive: true });
  //   return () => window.removeEventListener("mouseenter", handlePlainScroll);
  // });

  // const mouseEvent = (event) => {
  //   event === "enter" && setCallScroll(false);
  //   event === "leave" && setCallScroll(true);
  // };

  // autoScroll &&
  //   callScroll &&
  //   setInterval(() => {
  //     try {
  //       const { scrollLeft } = cards.current;

  //       setScrollLeftValue(scrollLeft);
  //       setScrollLeftMaxtValue(
  //         cards.current.scrollWidth - cards.current.offsetWidth
  //       );

  //       cards.current.scrollWidth - cards.current.offsetWidth === scrollLeft
  //         ? (cards.current.scrollLeft = 0)
  //         : (cards.current.scrollLeft += cards.current.clientWidth);
  //     } catch (err) {}
  //   }, 1000);

  return (
    <ProjectStyles>
      <header>
        <h2 className="title">Our Projects</h2>
      </header>

      <div className="overflow_wrapper">
        <section
          onMouseOver={handleScroll}
          className="project_gallery"
          // ref={scrollEl}
        >
          {ourProjectList.map((item) => (
            <ProjectCard ref={scrollEl} key={generateID(12)} {...item} />
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
