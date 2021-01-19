import React from "react";
import Footer from "../../Footer";
import Header from "../../Header";

const PublicLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />

      <main>{children}</main>

      <Footer />
    </React.Fragment>
  );
};

export default PublicLayout;
