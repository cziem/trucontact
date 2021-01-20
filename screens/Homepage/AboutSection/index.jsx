import React from "react";
import { CgArrowLongRight as RightArrowIcon } from "react-icons/cg";
import Button from "../../../components/Button";
import { AboutSectionStyles } from "./styles";
import COVID_IMAGE from "../../../assets/images/covid_19.jpg";
import OFFICE_IMAGE from "../../../assets/images/office.jpg";

const AboutSection = () => {
  return (
    <AboutSectionStyles>
      <header>
        <h2 className="title">About Us</h2>
        <p className="lead_text">
          TCSRN <b>founded in 2006</b>, is a consulting company that helps
          organisations to contribute to the societal goals of a philanthropic,
          activist or charitable nature by engaging in or supporting
          volunteering or ethically-oriented practices.
        </p>
      </header>

      <section className="main">
        <div className="image_wrap">
          <div className="image" />
        </div>

        <article>
          <h3 className="article_title">Our Story</h3>

          <p>
            The TruContact CSR Nigeria seed was sown long before the founder;{" "}
            <b>Kenneth Egbas</b> would even conceive the dream of starting a
            company. Life didn't always hand him a fair deal. From his early
            days and upon graduation from university he always dreamed of
            running a business based on the idea that outcomes from his business
            activities would promote innovation, equitable distribution of
            resources, justice, reduce wastage and help eradicate poverty in
            Africa. This gave wings to the dream that became TruContact CSR
            Nigeria.
          </p>
        </article>
      </section>

      <section className="sub_main">
        <div className="image_wrap">
          <div className="image" />
        </div>

        <article>
          <p>
            TCSRN was founded in 2006, and carried out what many have come to
            acknowledge as trail blazing spadework that led to a rapid growth of
            what has become a vibrant and viable corporate social responsibility
            and sustainability industry in Nigeria, and Africa.
          </p>

          <Button
            alternate
            size="xl"
            type="button"
            text="Read Full Story"
            icon={<RightArrowIcon />}
          />
        </article>
      </section>
    </AboutSectionStyles>
  );
};

export default AboutSection;
