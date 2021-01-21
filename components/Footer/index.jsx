import React from "react";
import {
  FaFacebookF as FacebookIcon,
  FaTwitter as TwitterIcon,
  FaLinkedinIn as LinkedinIcon,
} from "react-icons/fa";
import { Container } from "../Grids/Container";
import { FooterStyles } from "./styles";

const Footer = () => {
  return (
    <FooterStyles>
      <Container>
        <div className="content_wrapper">
          <section className="service">
            <p className="heading">Customer Service</p>

            <ul className="footer-items-list">
              <a href="#faqs">
                <li>FAQs</li>
              </a>
              <a href="#customer-service">
                <li>Customer Service</li>
              </a>
            </ul>
          </section>
          <section className="business">
            <p className="heading">Business</p>

            <ul className="footer-items-list">
              <a href="#career">
                <li>Career</li>
              </a>
              <a href="#partner-with-us">
                <li>Partner With Us</li>
              </a>
              <a href="#investor-relations">
                <li>Investor Relations</li>
              </a>
            </ul>
          </section>
          <section className="company">
            <p className="heading">Company</p>

            <ul className="footer-items-list">
              <a href="#about-us">
                <li>About Us</li>
              </a>
              <a href="#services">
                <li>Services</li>
              </a>
              <a href="#partners">
                <li>Partners</li>
              </a>
              <a href="#customer-stories">
                <li>Customer Stories</li>
              </a>
              <a href="#contact-us">
                <li>Contact Us</li>
              </a>
            </ul>
          </section>
          <section className="address">
            <div className="address_info">
              <p className="title">Lagos Nigeria</p>
              <p>30, Shakiru Anjorin Street, Road 39, Off</p>
              <p>Admiralty Way, Lekki Phase 1, Lekki, Lagos</p>
              <p>Phone: +234 123 4456</p>
            </div>
            <div className="social_info">
              <a href="https://twitter.com" rel="">
                <TwitterIcon />
              </a>
              <a href="https://facebook.com" rel="">
                <FacebookIcon />
              </a>
              <a href="https://linkedin.com" rel="">
                <LinkedinIcon />
              </a>
            </div>
          </section>
        </div>
      </Container>
    </FooterStyles>
  );
};

export default Footer;
