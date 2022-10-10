import "../css/styles.css";

export function Mobile_Number_Verification() {
  return (
    <div className="App">
      {/* Header */}
      <div className="header">
        <div className="grid-box header-sub">
          <img
            className="img"
            src="/assets/images/backArrow.png"
            alt=""
            height={10}
          />
          <img
            className="img"
            src="/assets/images/skin-expert-image.png"
            alt=""
            height={50}
          />
          <img
            className="img"
            src="/assets/images/cross-icon.png"
            alt=""
            height={10}
          />
        </div>
      </div>
      <div className="flex flex-col">
        {/* Body */}
        <div className="body align-from-left">
          <div className="whats_ur_number">
            <span className="text-4 grey-text-color">Enter Your Code</span>
          </div>
          <div className="whats_ur_number_caption">
            <span className="text-1">
              Enter 4-digit Code code we have sent to you
              <br />
              <span className="theme-text-color">+0 000 000 0000.</span>.
            </span>
          </div>

          <div class="verification-code">
            <div class="verification-code--inputs">
              <input type="text" className="text-4" maxlength="1" />
              <input type="text" className="text-4" maxlength="1" />
              <input type="text" className="text-4" maxlength="1" />
              <input type="text" className="text-4" maxlength="1" />
            </div>
            <input type="hidden" id="verificationCode" />
          </div>

          <section id="phoneNoContinue">
            <button className="text-2">Continue</button>
          </section>

          <section id="footer-section">
            <div className="flex">
              <span className="text-1">Terms of Service</span>
              <span className="text-1">Privacy Policy</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
