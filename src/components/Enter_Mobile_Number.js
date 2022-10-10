import "../css/styles.css";

export function Enter_Mobile_Number() {
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
            <span className="text-4 grey-text-color">What's your Number?</span>
          </div>
          <div className="whats_ur_number_caption">
            <span className="text-1">
              Please enter your valid phone number. We will send you 4-digit
              code to verify your account.
            </span>
          </div>

          <div className="flex enter_mob_no_div">
            <input type="text" className="countryCode" value="+00" />
            <input type="text" className="phoneNo" name="" value="0000000000" />
          </div>

          <section id="phoneNoContinue">
            <button className="text-2">Continue</button>
          </section>
        </div>
      </div>
    </div>
  );
}
