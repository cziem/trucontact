import React from "react";
import { CgArrowLongRight as RightArrowIcon } from "react-icons/cg";
import { generateID } from "../../../lib/helpers";
import { OurPartnersStyles } from "./styles";
import { testimonialList } from "./data";
import TestimonialCard from "../../../components/Cards/TestimonialCard";
import Button from "../../../components/Button";

const OurPartners = () => {
  return (
    <OurPartnersStyles>
      <header>
        <h2 className="title">Our Partners</h2>
        <p className="lead_text">
          Our team seek to help your organisation navigate this threshold that
          stands between you and your brands and distinctive innovations, and
          finding your brands inner sanctum.
        </p>
      </header>

      {/* Testimonials */}
      {testimonialList.map((item) => (
        <TestimonialCard key={generateID(12)} {...item} />
      ))}

      <div className="cta">
        <Button
          alternate
          size="xl"
          type="button"
          text="See More Testimonials"
          icon={<RightArrowIcon />}
        />
      </div>
    </OurPartnersStyles>
  );
};

export default OurPartners;
