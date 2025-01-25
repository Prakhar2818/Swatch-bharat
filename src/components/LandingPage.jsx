import React, { useState } from "react";
import govLogo from "/src/assets/Gov-logo.png";
import cloudImg from "/src/assets/cloud-bg.png";
import bannerImg from "/src/assets/mahakumbh-banner.jpg";
import smallBannerImg from "/src/assets/mahakumbh-small-banner.jpg";
import mailImg from "/src/assets/mail.png";
import downloadImg from "/src/assets/downloadCertificate.png";
import personImg from "/src/assets/person.png";
import transformIndia from "/src/assets/transform-india.png";
import innovation from "/src/assets/gov-innovation.png";
import quiz from "/src/assets/gov-quiz.png";
import blog from "/src/assets/gov-blog.png";
import society from "/src/assets/gov-society.png";
import greeting from "/src/assets/gov-greeting.png";
import digtalIndia from "/src/assets/digital-india-logo.png";
import dataGov from "/src/assets/data-gov.png";
import nationalPortal from "/src/assets/national-portal-logo.png";
import myGov from "/src/assets/my-gov.png";
import meityLogo from "/src/assets/meity-logo.png";
import pmIndia from "/src/assets/pm-india.png";
import nic from "/src/assets/nic.png";
const LandingPage = () => {
  const [isFlag, setIsFlag] = useState("");

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
          <div className="row w-100 justify-content-center certificate-cards mx-0 ">
            <div className="col-4 d-flex align-items-center justify-content-end mail-card">
              <div className="d-flex align-items-center mail">
                <img className="mx-3" src={mailImg} height={60} alt="" />
                <div className="w-100">
                  प्रमाणपत्र अपने ई-मेल | मोबाइल पर भेजें <br />
                  Send certificate to your Email | Mobile
                </div>
              </div>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-start download-card">
              <img className="mx-3" src={downloadImg} height={60} alt="" />
              <div>
                प्रमाणपत्र डाउनलोड <br />
                Download Certificate
              </div>
            </div>
          </div>
        </div>
        <div className="view-analytics">
          <div className="text-white analytics">
            <img src={personImg} height={60} alt="" />
            <span className="individual-pledge-count">3051</span>
            <div className="citizen">नागरिक | Citizen </div>
            <button className="view-analytics-btn">View Analytics</button>
          </div>
        </div>
        <div className="row mx-0 gov-department-logos ">
          <div className="col-12 text-center">
            <img src={transformIndia} height={25} alt="" />
            <span className="diff-logo"></span>
            <img src={innovation} height={25} alt="" />
            <span className="diff-logo"></span>
            <img src={quiz} height={25} alt="" />
            <span className="diff-logo"></span>
            <img src={blog} height={25} alt="" />
            <span className="diff-logo"></span>
            <img src={society} height={25} alt="" />
            <span className="diff-logo"></span>
            <img src={greeting} height={25} alt="" />
          </div>
        </div>
        <div className="gov-orgs row mx-0">
          <div className="col-12 text-center">
            <img src={digtalIndia} height={40} alt="" />
            <span className="diff-logo"></span>
            <img src={dataGov} height={40} alt="" />
            <span className="diff-logo"></span>
            <img src={nationalPortal} height={40} alt="" />
            <span className="diff-logo"></span>
            <img src={myGov} height={40} alt="" />
            <span className="diff-logo"></span>
            <img src={meityLogo} height={40} alt="" />
            <span className="diff-logo"></span>
            <img src={pmIndia} height={40} alt="" />
          </div>
        </div>
        <div className="row mx-0 gov-footer">
          <div className="col-12 d-flex justify-content-center align-items-start inner-foot">
            <img src={nic} height={30} alt="" />
            <div className="foot">
              <p>
                © Content owned, updated and maintained by the MyGov Cell. This
                website belongs to MyGov, Ministry of Electronics & Information
                Technology, Government of India. Platform is designed, developed
                and hosted by National Informatics Centre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
