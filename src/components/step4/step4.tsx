import { useState, useEffect } from 'react';
import './step4.css'

const Step4 = () => {
  const order = JSON.parse(localStorage.getItem("order") || "");
  const plan = order.plan.charAt(0).toUpperCase() + order.plan.slice(1)
  const time = order.time.charAt(0).toUpperCase() + order.time.slice(1)
  const [timeOp, setTimeOp] = useState(false)
  useEffect(() => {
    setTimeOp(order.time === "monthly")
  }, [order.time])

  // console.log(order);
  const calcTotalPrice = () => {
    const price = order.price
    let online = order.extraOptions.online
    let storage = order.extraOptions.storage
    let profile = order.extraOptions.profile
    if(timeOp){
      online = online? 1 : 0
      storage = storage? 2 : 0
      profile = profile? 2 : 0
    }else{
      online = online? 10 : 0
      storage = storage? 20 : 0
      profile = profile? 20 : 0
    }
    
    return price + online + storage + profile
  }

  const changePlan = () => {
    window.location.href = "/step2"
  }
  
  const goBack = () => {
    window.location.href = "/step3"
  }

  useEffect(() => {
    calcTotalPrice()
  })

  const handleFinish = () => {
    window.location.href = "/thanks"
  }

  return (
    <>
    <div className="stepContainer">
        <h1>Finishing up</h1>
        <h3>Double-check everything looks OK before confirming.</h3>
        <div className="orderContainer">
          <div className="background">
            <div className="orderPlan">
                <div className="orderPlanInfo">
                    <h3>{plan} ({time})</h3>
                    <a className="changeBtn" onClick={changePlan}>Change</a>
                </div>
                {timeOp ? <p className="orderPrice">${order.price}/mo</p> : <p className="orderPrice">${order.price}/yr</p>}
            </div>
            <hr />
            <div className="orderAddOns">
              {order.extraOptions.online && (
                <div className="orderAddOnsInfo">
                    <h4 className="addOnsTitle">Online service</h4>
                    {timeOp ? <p className="addOnsTotalPrice">+$1/mo</p> : <p className="addOnsTotalPrice">+$10/yr</p>}
                </div>
              )}
              {order.extraOptions.storage && (
                <div className="orderAddOnsInfo">
                    <h4 className="addOnsTitle">Larger storage</h4>
                    {timeOp ? <p className="addOnsTotalPrice">+$2/mo</p> : <p className="addOnsTotalPrice">+$20/yr</p>}
                </div>
              )}
              {order.extraOptions.profile && (
                <div className="orderAddOnsInfo">
                    <h4 className="addOnsTitle">Customizable profile</h4>
                    {timeOp ? <p className="addOnsTotalPrice">+$2/mo</p> : <p className="addOnsTotalPrice">+$20/yr</p>}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="totalPriceContainer">
          {timeOp ? <p>Total (per month)</p> : <p>Total (per year)</p>}
          <p className="totalPrice">${calcTotalPrice()}/mo</p>
        </div>
    </div>
    <div className="navContainer">
        <button className="goBackBtn" onClick={goBack}>Go back</button>
        <button
          className="nextBtn"
          onClick={handleFinish}
        >
          Confirm
        </button>
      </div>
    </>
  )
}

export default Step4