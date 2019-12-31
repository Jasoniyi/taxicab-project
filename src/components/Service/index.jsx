import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const services = [
  {
    icon: "car-alt",
    header: "Fast And Safe",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
  },
  {
    icon: "user-alt",
    header: "Experience Drivers",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
  },
  {
    icon: "paper-plane",
    header: "Online Booking",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
  },
  {
    icon: "map-pin",
    header: "GPS Searching",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
  },
  {
    icon: "car-alt",
    header: "Safe Journey",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
  },
  {
    icon: "cogs",
    header: "24/7 Cab Service",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
  }
];

const Service = () => {
  const [service] = useState(services);
  return (
    <div className="service-wrapper">
      <MDBContainer>
        <MDBRow>
          {service.map((item, i) => (
            <MDBCol md="4" className="services" key={i}>
              <div className="icon my-3">
                <MDBIcon size="2x" icon={item.icon} />
              </div>
              <div className="title mb-2">{item.header}</div>
              <div className="description mb-2">{item.desc}</div>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Service;
