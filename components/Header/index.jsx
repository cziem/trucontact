import React, { useState } from "react";
import { CgArrowLongRight as RightArrowIcon } from "react-icons/cg";
import { MdMenu as MenuIcon, MdClose as CloseIcon } from "react-icons/md";
import TRUCSR_LOGO from "../../assets/images/TRUCSR-icon.png";
import Button from "../Button";
import { HeaderStyles } from "./styles";

const Header = () => {
  const [showMenu, setShowMenu] = useState(undefined);

  return (
    <HeaderStyles showMenu={showMenu}>
      <div className="headerBox">
        <section className="wrapper">
          <div className="logo">
            <a href="/">
              <img src={TRUCSR_LOGO} alt="trucsr" />
            </a>
          </div>

          <div className={"mobileSection"}>
            <div className="icon-button">
              <MenuIcon onClick={() => setShowMenu(!showMenu)} />
            </div>
          </div>
        </section>

        <div className="desktopSection">
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
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
