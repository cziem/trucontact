import React, { useEffect, useState } from "react";
import Button from "../Button";
import { Container } from "../Grids/Container";
import { HeaderStyles } from "./styles";
import { CgArrowLongRight as RightArrowIcon } from "react-icons/cg";
import TRUCSR_LOGO from "../../assets/images/TRUCSR-icon.png";

const Header = () => {
  const [position, setPosition] = useState(0);

  const handleScroll = () => setPosition(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    setPosition(window.screenY);

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, [position]);

  return (
    <HeaderStyles position={position}>
      <Container className="container">
        <div className="logo">
          <img src={TRUCSR_LOGO} alt="trucsr" />
        </div>
        <nav className="navigation">
          <ul>
            <a href="#services">
              <li>Services</li>
            </a>
            <a href="#about-us">
              <li>About Us</li>
            </a>
            <a href="#csr-academy">
              <li>CSR Academy</li>
            </a>
            <a href="#publications">
              <li>Publications</li>
            </a>
            <a href="#events">
              <li>Events</li>
            </a>
            <a href="#media">
              <li>Media</li>
            </a>
          </ul>

          <Button type="button" text="Contact Us" icon={<RightArrowIcon />} />
        </nav>
      </Container>
    </HeaderStyles>
  );
};

export default Header;
