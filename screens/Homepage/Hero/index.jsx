import React from "react";
import Button from "../../../components/Button";
import { HeroStyles } from "./styles";
import { CgArrowLongDown as DownArrowIcon } from "react-icons/cg";

const Hero = () => {
  return (
    <HeroStyles>
      <div className="overlay" />

      <section>
        <div className="info">
          <h3>We are in the</h3>
          <h3>business of</h3>
          <h4>sustainability</h4>

          <p>
            TCSRN <b>founded in 2006</b>, is a consulting company that helps
            organisations to contribute to the societal goals of a
            philanthropic, activist or charitable nature by engaging in or
            supporting volunteering or ethically-oriented practices.
          </p>
        </div>

        <Button
          alternate
          size="xl"
          type="button"
          text="Explore Site"
          icon={<DownArrowIcon />}
        />
      </section>

      <section className="carousel_count">
        <div className="counter active" />
        <div className="counter" />
      </section>
    </HeroStyles>
  );
};

export default Hero;
