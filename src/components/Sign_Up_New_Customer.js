import "../css/styles.css";

export function Sign_Up_New_Customer() {
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
      <div className="flex flex-col align-items-center">
        {/* Body */}
        <div className="body">
          <img
            src="/assets/images/skin-expert-image.png"
            alt="Skin Expert"
            height={250}
          />
          <p className="text-1 theme-text-color">Sign in to continue</p>
          <div className="white-rectangle-border-div">
            <span className="text-2 theme-text-color">Use Phone Number</span>
          </div>

          <div className="flex">
            <div className="agreeToSocialMediaCheckbox">
              <input type="checkbox" defaultChecked id="checkbox" />
              <label htmlFor="checkbox"></label>
            </div>
            <span className="text-3 theme-text-color">
              I agreed to receive the communication on following..
            </span>
          </div>

          <section id="social-media-section">
            <div className="flex">
              <div className="flex flex-col">
                <div className="white-circle-border-div">
                  <img
                    className="socialMediaImage"
                    src="/assets/svgs/whatsapp.svg"
                    alt="Whatsapp Icon"
                  />
                </div>
                <span className="text-1">Whatsapp</span>
              </div>

              <div className="flex flex-col">
                <div className="white-circle-border-div">
                  <img
                    className="socialMediaImage"
                    src="/assets/svgs/email.svg"
                    alt="Email Icon"
                  />
                </div>
                <span className="text-1">Email</span>
              </div>

              <div className="flex flex-col">
                <div className="white-circle-border-div">
                  <img
                    className="socialMediaImage"
                    src="/assets/svgs/sms.svg"
                    alt="SMS"
                  />
                </div>
                <span className="text-1">SMS</span>
              </div>
            </div>
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
