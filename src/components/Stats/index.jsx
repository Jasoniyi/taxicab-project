import React, { useState, useEffect } from "react";
import { MDBIcon, MDBRow, MDBCol, MDBContainer } from "mdbreact";
import Agent from "../../resources/images/agent-18762.png";

const Index = () => {
  //   const [passenger, setPassenger] = useState(0);

  //   const getPassengerNumber = () => {
  //     if (passenger < 10000) {
  //       setPassenger(passenger + 1);
  //     }
  //   };

  //   const useEffect = () => {
  //     setInterval(() => {
  //       getPassengerNumber();
  //     }, 1000);
  //   };

  return (
    <>
      <div className="stats-wrapper">
        <div className="passenger my-5">
          <div className="stat-icon">
            <MDBIcon size="2x" icon="users" className="amber-text" />
          </div>
          <div className="value">10000+</div>
          <div className="text">Passengers</div>
        </div>
        <div className="passenger my-5">
          <div className="stat-icon">
            <MDBIcon size="2x" icon="car-alt" className="amber-text" />
          </div>
          <div className="value">1200</div>
          <div className="text">Cab Drivers</div>
        </div>
        <div className="passenger my-5">
          <div className="stat-icon">
            <MDBIcon size="2x" icon="map-marked-alt" className="amber-text" />
          </div>
          <div className="value">500</div>
          <div className="text">Cab Routes</div>
        </div>
      </div>
      <div className="call-us">
        <MDBContainer>
          <MDBRow className="mx-0">
            <MDBCol md="8" className="my-5">
              <div className="time">24 Hours 7 Days a Week</div>
              <div className="tag">Call Us Now</div>
              <div className="phone"> +1(12) 366 411 4999</div>
              <div className="call-desc">
                Nam arcu mauris, tincidunt sed convallis non, egestas ut lacus.
                Cras sapien urna, varius malesuada ut varius consequat,
                hendrerit nisl. Aliquam vestibulum, odio non ullamcorper
                malesuada totam rem aperiam, eaque ipsa quae.
              </div>
            </MDBCol>
            <MDBCol md="4" className="mt-5">
              <img
                src={Agent}
                alt="agent"
                className="img-responsive call-agent"
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default Index;
