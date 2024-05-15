import './thanks.css'

const Thanks = () => {
  return (
    <div className="thanksContainer">
      <div className="thanks">
        <div className="iconContainer">
            <img src='/images/icon-thank-you.svg' alt="icon-thank-you" />
        </div>
        <h1 className='thanksTitle'>Thank you!</h1>
        <p className='thanksText'>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support please feel free to email us at
          support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Thanks;
