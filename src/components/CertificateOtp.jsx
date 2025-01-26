import React from "react";
import "./CertificateOtp.scss";
import mobileOtp from "/src/assets/mobile-otp.png";
const CertificateOtp = () => {
  return (
    <>
      <div className="otp-class">
        <div className="inner-otp-class ">
          <h2 className="text-center text-white fw-bold mb-2">
            स्वच्छ एवं डिजिटल महाकुंभ की प्रतिज्ञा - 2025
          </h2>
          <h4 className="text-center text-white mb-4">
            SWACHH & DIGITAL MAHAKUMBH PLEDGE - 2025
          </h4>
          <div className="mobile-otp">
            <div className="inner-mobile-otp">
              <img src={mobileOtp} height={30} alt="" />
              <input type="text" placeholder="Enter Mobile No." />
              <button>Get OTP</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateOtp;
