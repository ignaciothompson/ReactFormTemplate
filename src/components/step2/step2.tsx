import { useState } from 'react';
import './step2.css';


interface Order {
  plan: string;
  time: string;
  extraOptions: {
    online: [string, number] | [];
    storage: [string, number] | [];
    profile: [string, number] | [];
  };
}


const Step2 = ({ order }: { order: Order }) => {
  const [timePlan, setTimePlan] = useState(false);
  const [optionPlan, setOptionPlan] = useState('');

  // const handleStep2 = () => {
  //   window.location.href = '/step3';
  // }

  const handleActivePlan = (x:number) => {
    if(x === 1){
      document.querySelector('.arcade')?.classList.add('active');
      document.querySelector('.advanced')?.classList.remove('active');
      document.querySelector('.pro')?.classList.remove('active');
    }else if(x === 2){
      document.querySelector('.advanced')?.classList.add('active');
      document.querySelector('.arcade')?.classList.remove('active');
      document.querySelector('.pro')?.classList.remove('active');
    }else if(x === 3){
      document.querySelector('.pro')?.classList.add('active');
      document.querySelector('.arcade')?.classList.remove('active');
      document.querySelector('.advanced')?.classList.remove('active');
    }
  }

  const handleTime = () => {
    const checkbox = document.querySelector('#timeCheck') as HTMLInputElement;
    if(checkbox.checked){
      document.querySelector('.monthly')?.classList.remove('selected');
      document.querySelector('.yearly')?.classList.add('selected');
      setTimePlan(true);
    }else{
      document.querySelector('.monthly')?.classList.add('selected');
      document.querySelector('.yearly')?.classList.remove('selected');
      setTimePlan(false);
    }
  }

  const handlePlan = () => {
    const timePlanSelected = timePlan ? "yearly" : "monthly";
    console.log(optionPlan);
    order.plan = optionPlan;
    order.time = timePlanSelected;
  }

  return (
    <>
    <div className='stepContainer'>
      <h1>Select your plan</h1>
      <h3>You have the option of monthly or yearly billing.</h3>
      <div className='cardContainer'>
          <div className='planCard arcade' onClick={() => {
            handleActivePlan(1);
            setOptionPlan('arcade');
          }}>
            <img src='/images/icon-arcade.svg' alt='arcade' className='planIcon'/>
            <div className='planInfo'>
              <h2 className='planTitle'>Arcade</h2>
              <p className='planPrice'>$9/mo</p>
              {timePlan ? <p className='planPriceDiscount'>2 months free</p> : null}
            </div>
          </div>
          <div className='planCard advanced' onClick={() => {
            handleActivePlan(2);
            setOptionPlan('advanced');
          }}>
            <img src='/images/icon-advanced.svg' alt='advanced' className='planIcon'/>
            <div className='planInfo'>
              <h2 className='planTitle'>Advanced</h2>
              <p className='planPrice'>$12/mo</p>
              {timePlan ? <p className='planPriceDiscount'>2 months free</p> : null}
            </div>
          </div>
          <div className='planCard pro' onClick={() => {
            handleActivePlan(3);
            setOptionPlan('pro');
          }}>
            <img src='/images/icon-pro.svg' alt='pro' className='planIcon'/>
            <div className='planInfo'>
              <h2 className='planTitle'>Pro</h2>
              <p className='planPrice'>$15/mo</p>
              {timePlan ? <p className='planPriceDiscount'>2 months free</p> : null}
            </div>
        </div>
      </div>
      <div className='timeContainer'>
        <div className='time monthly'>Monthly</div>
        <label className="switch">
          <input type="checkbox" id='timeCheck' onChange={handleTime}></input>
          <span className='slider'></span>
        </label>
        <div className='time yearly'>Yearly</div>
      </div>
    </div>
    <div className='navContainer'>
      <button className="goBackBtn">
          Go back
        </button>
        <button className="nextBtn" onClick={() => {
          // handleStep2();
          handlePlan();
        }}>
          Next Step
        </button>
    </div>
    </>
  )
}


export default Step2