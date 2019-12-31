import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Gplay from "../../resources/images/app1.png";
import Astore from "../../resources/images/app.png";
import Mobile from "../../resources/images/mobile.png";

const index = () => {
  return (
    <div className="download-wrapper">
      <MDBContainer className="download-cover">
        <MDBRow>
          <MDBCol md="7">
            <div className="download-text">
              Download The Mobile App For
              <br /> Free <br />
              Get More Exciting Offers
            </div>
            <div className="download-desc mt-1">
              Nam arcu mauris, tincidunt sed convallis non, egestas ut lacus.
              Cras sapien urna, malesuada ut varius consequat, hendrerit nisl.
              Aliquam vestibulum, odio non ullamcorper malesuada totam rem
              aperiam, eaque ipsa quae.
            </div>
            <div className="download-links my-3">
              <div className="andriod">
                <img
                  src={Gplay}
                  alt="andriod"
                  className="img-responsive playstore"
                />
              </div>
              <div className="iphone mx-3">
                <img
                  src={Astore}
                  alt="andriod"
                  className="img-responsive playstore"
                />
              </div>
            </div>
          </MDBCol>
          <MDBCol md="5">
            <img src={Mobile} alt="phone" className="img-responsive mobile" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer">
        <div className="footer-text pt-3">Designed by JasoNiyi</div>
      </div>
    </div>
  );
};

export default index;
