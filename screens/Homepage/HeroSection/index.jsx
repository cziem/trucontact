import React from "react";
import Header from "../../../components/Header";
import { HeroSectionStyles } from "./styles";

const HeroSection = () => {
  return (
    <HeroSectionStyles>
      <div className="overlay" />

      {/* <Header /> */}

      <section>
        <div className="info">
          <h3>We are in the</h3>
          <h3>business of</h3>
          <h4>sustainability</h4>

          <p>
            TCSRN <b>founded in 2006</b>,is a consulting company that helps
            organisations to contribute to the societal goals of a
            philanthropic, activist or charitable nature by engaging in or
            supporting volunteering or ethically-oriented practices.
          </p>
        </div>
      </section>
    </HeroSectionStyles>
  );
};

export default HeroSection;
