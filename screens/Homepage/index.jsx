import React from "react";
import PublicLayout from "../../components/Layouts/PublicLayout";
import AboutUs from "./AboutUs";
import Blog from "./Blog";
import HeroSection from "./Hero";
import OurPartners from "./OurPartners";
import OurServices from "./OurServices";
import Projects from "./Projects";

const Homepage = () => {
  return (
    <PublicLayout>
      <HeroSection />
      {/* <AboutUs /> */}
      {/* <OurServices /> */}
      <Projects />
      {/* <OurPartners /> */}
      <Blog />
    </PublicLayout>
  );
};

export default Homepage;
