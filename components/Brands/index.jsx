import React from "react";
import PropTypes from "prop-types";
import { generateID } from "../../lib/helpers";
import { BrandsStyles } from "./styles";

const Brands = ({ brands }) => {
  return (
    <BrandsStyles>
      {brands.map((item) => (
        <div key={generateID(8)} className="brand_item">
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </BrandsStyles>
  );
};

Brands.PropTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Brands;
