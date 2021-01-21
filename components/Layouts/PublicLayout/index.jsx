import React from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { PublicLayoutStyles } from "./styles";

const PublicLayout = ({ children }) => {
  return (
    <PublicLayoutStyles>
      <Header />

      <main>{children}</main>

      <Footer />
    </PublicLayoutStyles>
  );
};

export default PublicLayout;
