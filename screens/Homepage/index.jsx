import React from "react";
import PublicLayout from "../../components/Layouts/PublicLayout";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";

const Homepage = () => {
  return (
    <PublicLayout>
      <HeroSection />
      <AboutSection />
    </PublicLayout>
  );
};

export default Homepage;
