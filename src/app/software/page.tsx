import React from "react";
import About from "../about/page";
import SoftwareProducts from "../components/software/software";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const Software = () => {
  return (
    <div>
      <div className="">
        <Header />
        <SoftwareProducts />
        <Footer />
      </div>
    </div>
  );
};

export default Software;
