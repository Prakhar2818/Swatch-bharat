import React from "react";
import "./PledgeTakingForm.scss";

const PledgeTakingForm = () => {
  return (
    <div className="pledge-form   ">
      <div className="inner-form w-100">
        <h2 className="text-center text-white fw-bold mb-2">
          स्वच्छ एवं डिजिटल महाकुंभ की प्रतिज्ञा - 2025
        </h2>
        <h4 className="text-center text-white mb-4">
          SWACHH & DIGITAL MAHAKUMBH PLEDGE - 2025
        </h4>

        <div className="card w-100">
          <h5 className="mb-3 fw-bold">
            बुनियादी ब्यौरा दर्ज कीजिये | Enter Basic Details
          </h5>

          <form>
            <div className="mb-3">
              <label className="form-label fw-bold">नाम | Name *</label>
              <div className="row g-2">
                <div className="col-12 col-md-4">
                  <select className="form-select">
                    <option>-Select-</option>
                  </select>
                </div>
                <div className="col-12 col-md-8">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">लिंग | Gender *</label>
              <div className="d-flex flex-wrap gap-3">
                <div>
                  <input type="radio" name="gender" value="male" /> Male
                </div>
                <div>
                  <input type="radio" name="gender" value="female" /> Female
                </div>
                <div>
                  <input type="radio" name="gender" value="others" /> Others
                </div>
              </div>
            </div>

            <div className="row g-2">
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label fw-bold">
                  जन्म तिथि | Date Of Birth *
                </label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label fw-bold">
                  पिन कोड | Pin Code *
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Pin Code"
                />
              </div>
            </div>

            <div className="row g-2">
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label fw-bold">राज्य | State *</label>
                <select className="form-select">
                  <option>---Select---</option>
                </select>
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label fw-bold">जिला | District *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your District"
                />
              </div>
            </div>

            <div className="row g-2">
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label fw-bold">ईमेल | Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="col-md-6 col-12 mb-3">
                <label className="form-label fw-bold">मोबाइल | Mobile *</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter Your Mobile Number"
                />
              </div>
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="myGovCheck"
              />
              <label className="form-check-label" htmlFor="myGovCheck">
                Details given above can be used to create a MyGov account on my
                behalf.
              </label>
            </div>
            <div className="lang-btn">
              <button type="submit" className=" py-2 rounded-pill">
                भाषा के चयन के लिए आगे बढ़ें | Proceed for Language selection
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PledgeTakingForm;
