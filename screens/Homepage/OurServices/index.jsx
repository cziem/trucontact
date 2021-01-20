import React from "react";
import Card from "../../../components/Cards";
import { ourServicesList } from "./data";
import { OurServicesStyles } from "./styles";
import { generateID } from "../../../lib/helpers";

const OurServices = () => {
  return (
    <OurServicesStyles>
      <header>
        <h2 className="title">Our Services</h2>
        <p className="lead_text">
          Our team seeks to help your organisation navigate this threshold that
          stands your brands and distinctive innovations, and finding your
          brands' inner sanctum.
        </p>
      </header>

      <section className="service_gallery">
        {ourServicesList.map((item) => (
          <Card key={generateID(12)} {...item} />
        ))}
      </section>
    </OurServicesStyles>
  );
};

export default OurServices;
