import { useEffect, useState } from "react";
import "./step3.css";

const Step3 = () => {
  const [timeOp, setTimeOp] = useState(false);
  const order = JSON.parse(localStorage.getItem("order") || "");

  useEffect(() => {
    if (order.time === "monthly") {
      setTimeOp(true);
    } else {
      setTimeOp(false);
    }
  }, [order]);

  const handleState = (x: number) => {
    if(x === 1){
      document.querySelector('.online')?.classList.toggle('activeAddOn')
    }
    if(x === 2){
      document.querySelector('.storage')?.classList.toggle('activeAddOn')
    }
    if(x === 3){
      document.querySelector('.profile')?.classList.toggle('activeAddOn')
    }
  };

  const handleStep3 = () => {
    window.location.href = "/step4";
  };

  const handleAddOns = () => {
    const online = document.querySelector('.online')?.classList.contains('activeAddOn');
    const storage = document.querySelector('.storage')?.classList.contains('activeAddOn');
    const profile = document.querySelector('.profile')?.classList.contains('activeAddOn');
    order.extraOptions = {
      online: online,
      storage: storage,
      profile: profile
    };
    localStorage.setItem("order", JSON.stringify(order));
  };

  const goBack = () => {
    window.location.href = "/step2"
  }

  return (
    <>
      <div className="stepContainer">
        <h1>Pick add-ons</h1>
        <h3>Add-ons help enhance your gaming experience.</h3>
        <div className="addOnsContainer">
          <div className="addOns online">
            <input type="checkbox" className="checkBox" onChange={() => handleState(1)}/>
            <div className="addOnsInfo">
              <h3>Online service</h3>
              <p>Access to multiplayer games</p>
            </div>
            {timeOp ? <p className="addOnsPrice">$1/mo</p> : <p className="addOnsPrice">$10/yr</p>}
          </div>
          <div className="addOns storage">
            <input type="checkbox" className="checkBox" onChange={() => handleState(2)}/>
            <div className="addOnsInfo">
              <h3>Larger storage</h3>
              <p>Extra 1TB of cloud save</p>
            </div>
            {timeOp ? <p className="addOnsPrice">$2/mo</p> : <p className="addOnsPrice">$20/yr</p>}
          </div>
          <div className="addOns profile">
            <input type="checkbox" className="checkBox" onChange={() => handleState(3)}/>
            <div className="addOnsInfo">
              <h3>Customizable profile</h3>
              <p>Custom theme on your profile</p>
            </div>
            {timeOp ? <p className="addOnsPrice">$2/mo</p> : <p className="addOnsPrice">$20/yr</p>}
          </div>
        </div>
      </div>
      <div className="navContainer">
        <button className="goBackBtn" onClick={goBack}>Go back</button>
        <button
          className="nextBtn"
          onClick={() => {
            handleStep3();
            handleAddOns();
          }}
        >
          Next Step
        </button>
      </div>
    </>
  );
};

export default Step3;
