import { useState, useEffect } from "react";
import "./step2.css";

const Step2 = () => {
  const [timePlan, setTimePlan] = useState(false);
  const [optionPlan, setOptionPlan] = useState("");
  const [price, setPrice] = useState(0);
  const [x, setX] = useState(0);

  useEffect(() => {
    handlePlanPrice();
  });

  useEffect(() => {
    setPrice(price);
  }, [price]);

  const handleStep2 = () => {
    window.location.href = "/step3";
  };

  const goBack = () => {
    window.location.href = "/"
  }

  const handleActivePlan = (plan: number) => {
    if (plan === 1) {
      document.querySelector(".arcade")?.classList.add("active");
      document.querySelector(".advanced")?.classList.remove("active");
      document.querySelector(".pro")?.classList.remove("active");
      setX(1);
    } else if (plan === 2) {
      document.querySelector(".advanced")?.classList.add("active");
      document.querySelector(".arcade")?.classList.remove("active");
      document.querySelector(".pro")?.classList.remove("active");
      setX(2);
    } else if (plan === 3) {
      document.querySelector(".pro")?.classList.add("active");
      document.querySelector(".arcade")?.classList.remove("active");
      document.querySelector(".advanced")?.classList.remove("active");
      setX(3);
    }
  };

  const handleTime = () => {
    const checkbox = document.querySelector("#timeCheck") as HTMLInputElement;
    if (checkbox.checked) {
      document.querySelector(".monthly")?.classList.remove("selected");
      document.querySelector(".yearly")?.classList.add("selected");
      setTimePlan(true);
    } else {
      document.querySelector(".monthly")?.classList.add("selected");
      document.querySelector(".yearly")?.classList.remove("selected");
      setTimePlan(false);
    }
  };

  const handlePlanPrice = () => {
    if (x === 1) {
      setPrice(timePlan ? 90 : 9);
    } else if (x === 2) {
      setPrice(timePlan ? 120 : 12);
    } else if (x === 3) {
      setPrice(timePlan ? 150 : 15);
    }
  };

  const handlePlan = () => {
    const order = JSON.parse(localStorage.getItem("order") || "{}");
    const timePlanSelected = timePlan ? "yearly" : "monthly";
    order.plan = optionPlan;
    order.time = timePlanSelected;
    order.price = price;
    localStorage.setItem("order", JSON.stringify(order));
  };

  return (
    <>
      <div className="stepContainer">
        <h1>Select your plan</h1>
        <h3>You have the option of monthly or yearly billing.</h3>
        <div className="cardContainer">
          <div
            className="planCard arcade"
            onClick={() => {
              handleActivePlan(1);
              setOptionPlan("arcade");
            }}
          >
            <img
              src="/images/icon-arcade.svg"
              alt="arcade"
              className="planIcon"
            />
            <div className="planInfo">
              <h2 className="planTitle">Arcade</h2>
              <p className="planPrice">$9/mo</p>
              {timePlan ? (
                <p className="planPriceDiscount">2 months free</p>
              ) : null}
            </div>
          </div>
          <div
            className="planCard advanced"
            onClick={() => {
              handleActivePlan(2);
              setOptionPlan("advanced");
            }}
          >
            <img
              src="/images/icon-advanced.svg"
              alt="advanced"
              className="planIcon"
            />
            <div className="planInfo">
              <h2 className="planTitle">Advanced</h2>
              <p className="planPrice">$12/mo</p>
              {timePlan ? (
                <p className="planPriceDiscount">2 months free</p>
              ) : null}
            </div>
          </div>
          <div
            className="planCard pro"
            onClick={() => {
              handleActivePlan(3);
              setOptionPlan("pro");
            }}
          >
            <img src="/images/icon-pro.svg" alt="pro" className="planIcon" />
            <div className="planInfo">
              <h2 className="planTitle">Pro</h2>
              <p className="planPrice">$15/mo</p>
              {timePlan ? (
                <p className="planPriceDiscount">2 months free</p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="timeContainer">
          <div className="time monthly">Monthly</div>
          <label className="switch">
            <input type="checkbox" id="timeCheck" onChange={handleTime}></input>
            <span className="slider"></span>
          </label>
          <div className="time yearly">Yearly</div>
        </div>
      </div>
      <div className="navContainer">
        <button className="goBackBtn" onClick={goBack}>Go back</button>
        <button
          className="nextBtn"
          onClick={() => {
            handleStep2();
            handlePlan();
          }}
        >
          Next Step
        </button>
      </div>
    </>
  );
};

export default Step2;