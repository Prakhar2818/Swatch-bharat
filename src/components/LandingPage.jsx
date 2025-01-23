import React from "react";
import govLogo from "/src/assets/Gov-logo.png";
import cloudImg from "/src/assets/cloud-bg.png";
import bannerImg from "/src/assets/mahakumbh-banner.jpg";
import smallBannerImg from "/src/assets/mahakumbh-small-banner.jpg";
import mailImg from "/src/assets/mail.png";
import downloadImg from "/src/assets/downloadCertificate.png";

const LandingPage = () => {
  return (
    <>
      <div className="landing-page  d-flex justify-content-center flex-column">
        <header className="head mt-4 d-flex justify-content-around">
          <div>
            <img src={govLogo} height={80} className="w-100" alt="" />
          </div>
          <div>
            <img src={cloudImg} height={80} className="w-100" alt="" />
          </div>
        </header>
        <div className="banner py-2 d-flex justify-content-center">
          <img className="desktop" src={bannerImg} alt="" />
          <img className="d-none mobile" src={smallBannerImg} alt="" />
        </div>
        <div className="d-flex justify-content-center">
          <button className="pledge-btn">
            शपथ लीजिये <br />
            Take Pledge
          </button>
        </div>
        <div className="d-flex align-items-center pt-4 certificate flex-column">
          <div className="title-text mb-4">
            यदि प्रतिज्ञा पहले ही ले ली है तो वचनबद्धता का प्रमाण-पत्र प्राप्त
            करें
            <span className="diff">|</span>
            <span>
              If already taken Pledge, Get the Certificate of Commitment
            </span>
          </div>
          <div className="row w-100 justify-content-center">
            <div className="col-4 d-flex align-items-center justify-content-end">
              <div className="d-flex align-items-center">
                <img className="mx-3" src={mailImg} height={60} alt="" />
                <div className="w-100">
                  प्रमाणपत्र अपने ई-मेल | मोबाइल पर भेजें <br />
                  Send certificate to your Email | Mobile
                </div>
              </div>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-start">
              <img className="mx-3" src={downloadImg} height={60} alt="" />
              <div>
                प्रमाणपत्र डाउनलोड <br />
                Download Certificate
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
