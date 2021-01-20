import React from "react";
import PublicLayout from "../../components/Layouts/PublicLayout";
import AboutUs from "./AboutUs";
import Blog from "./Blog";
import HeroSection from "./Hero";
import OurServices from "./OurServices";

const Homepage = () => {
  return (
    <PublicLayout>
      <HeroSection />
      <AboutUs />
      <OurServices />
      <Blog />
    </PublicLayout>
  );
};

export default Homepage;
