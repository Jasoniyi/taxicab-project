import React from "react";
import { Element } from "react-scroll";

import Header from "./header";
import Banner from "./Banner";
import About from "./About";
import Service from "./Service";
import Stats from "./Stats";
import Download from "./Download";

const index = () => {
  return (
    <div>
      <div className="header-wrapper">
        <div className="header-cover">
          <Element name="Header">
            <Header />
          </Element>
          <Element name="Banner">
            <Banner />
          </Element>
        </div>
      </div>
      <Element name="About">
        <About />
      </Element>
      <Element name="Service">
        <Service />
      </Element>
      <Element name="Stats">
        <Stats />
      </Element>
      <Element name="Download">
        <Download />
      </Element>
    </div>
  );
};

export default index;
