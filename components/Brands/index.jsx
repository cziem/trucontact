import React from "react";
import PropTypes from "prop-types";
import { generateID } from "../../lib/helpers";
import { BrandsStyles } from "./styles";

const Brands = ({ brandsTop, brandsDown }) => {
  const brandRef = React.createRef();
  const [canRun, setCanRun] = React.useState(true);

  const scrollBrands = () => {
    brandRef.current.classList.add("scroll_brand");

    // if (brandRef.current.classList.contains("scroll_brand")) {
    //   brandRef.current.classList.remove("scroll_brand");
    // }

    // canRun && brandRef.current.classList.add("scroll_brand");
  };
  const ignoreScrollBrands = () => {
    // brandRef.current.classList.remove("scroll_brand");
    // window.addEventListener("animationend", () => {
    //   setCanRun(true);
    //   brandRef.current.classList.remove("scroll_brand");
    //   console.log("finished");
    // });
  };

  React.useEffect(() => {
    window.addEventListener("animationend", () => {
      const el = document.querySelector(".scroll_brand");
      el.classList.remove("scroll_brand");
      console.log(el, "finished");
    });
    // window.addEventListener("animationstart", () => {
    //   setCanRun(false);
    //   console.log("starting");
    // });
  }, [brandRef]);

  return (
    <BrandsStyles>
      <div className="brand_styles_sub_div">
        <div
          onMouseEnter={scrollBrands}
          onMouseLeave={ignoreScrollBrands}
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
