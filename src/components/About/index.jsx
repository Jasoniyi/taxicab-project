import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBIcon
} from "mdbreact";

const About = () => {
  const [options] = useState([
    "Choose Vehicle",
    "Vehicle 1",
    "Vehicle 2",
    "Vehicle 3"
  ]);
  return (
    <div className="about-wrapper">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="7" className="about-text">
            <h4>BEST CABS AVAILABLE FOR YOU</h4>
            <h2>Trusted Cab Services In Your City</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error ipsum voluptatem
              ut accusa ntium dolo remque laudantium, totam rem aperiam, eaque
              ipsa quae ab illo quasi sed architecto beatae vitae dicta sut
              dolor etr explicabo. Morbi a luctus magna, eu rutrum turpis. Sed
              ut perspiciatis unde omnis iste natus error ipsum voluptatem ut
              accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo.
            </p>
          </MDBCol>
          <MDBCol md="5">
            <MDBCard className="card-wrapper">
              <MDBCardBody>
                <form>
                  <h2 className="form-header-Text p-3">Book a Cab</h2>
                  <input
                    type="text"
                    id="defaultFormCardNameEx"
                    className="form-control"
                    placeholder="Name"
                  />
                  <br />

                  <input
                    type="number"
                    id="defaultFormCardEmailEx"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                  <br />

                  <input
                    type="text"
                    id="defaultFormCardEmailEx"
                    className="form-control"
                    placeholder="Source(From)"
                  />
                  <br />

                  <input
                    type="text"
                    id="defaultFormCardEmailEx"
                    className="form-control"
                    placeholder="Destination"
                  />
                  <br />

                  <select
                    className="browser-default custom-select"
                    selected="options"
                  >
                    {options.map((option, i) => (
                      <option key={i}>{option}</option>
                    ))}
                  </select>
                  <div className="text-center  mt-3">
                    <MDBBtn className="btn-width" type="submit">
                      Book Now
                      <MDBIcon far icon="paper-plane" className="ml-2" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default About;
