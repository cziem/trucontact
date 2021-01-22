import React from "react";
import PropTypes from "prop-types";
import { generateID } from "../../lib/helpers";
import { BrandsStyles } from "./styles";

const Brands = ({ brandsTop, brandsDown }) => {
  const brandRef = React.createRef();

  const scrollBrands = () => {
    brandRef.current.classList.add("scroll_brand");
  };

  React.useEffect(() => {
    window.addEventListener("animationend", () => {
      const el = document.querySelector(".scroll_brand");
      if (el) {
        el.classList.remove("scroll_brand");
      }
    });
  }, [brandRef]);

  return (
    <BrandsStyles>
      <div className="brand_styles_sub_div">
        <div
          onMouseEnter={scrollBrands}
          className="brands_main_cover"
          ref={brandRef}
        >
          <div className="brands_sub_cover">
            {brandsTop.map((item) => (
              <div key={generateID(8)} className="brand_item">
                <img src={item.image} alt={item.name} />
              </div>
            ))}
          </div>
          <div className="brands_sub_cover">
            {brandsDown.map((item) => (
              <div key={generateID(8)} className="brand_item">
                <img src={item.image} alt={item.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
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
