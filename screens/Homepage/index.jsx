import React from "react";
import PublicLayout from "../../components/Layouts/PublicLayout";
import AboutUs from "./AboutUs";
import Blog from "./Blog";
import HeroSection from "./Hero";
import OurServices from "./OurServices";
import Projects from "./Projects";

const Homepage = () => {
  return (
    <PublicLayout>
      <HeroSection />
      <AboutUs />
      <OurServices />
      <Projects />
      <Blog />
    </PublicLayout>
  );
};

export default Homepage;
