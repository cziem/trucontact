import React from "react";
import PublicLayout from "../../components/Layouts/PublicLayout";
import AboutUs from "./AboutUs";
import HeroSection from "./Hero";

const Homepage = () => {
  return (
    <PublicLayout>
      <HeroSection />
      <AboutUs />
    </PublicLayout>
  );
};

export default Homepage;
