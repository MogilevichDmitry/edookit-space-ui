import React from 'react';
import Icon from '../icon/icon.jsx';
import IconBasicInfo from '!raw-loader!../../resources/icons/icon-basic-info.svg';
import Button from '../button/button.jsx';
import SocialButton from '../social-button/social-button.jsx';

const SignupBasicInfo = () => (
  <div className="signup__form">
    <div className="basic-info">
      <span className="basic-info__icon">
        <Icon svg={IconBasicInfo}/>
      </span>
      <div className="basic-info__main">
        <div className="basic-info__registration">
          <div className="basic-info__registration-fields">
            <div className="basic-info__registration-fields-email">
              <span className="email-title"></span>
              <input className="email-input"/>
              <span className="email-description"></span>
            </div>
            <div className="basic-info__registration-fields-name">
              <span className="name-title"></span>
              <input className="name-input"/>
            </div>
          </div>
          <Button className="basic-info__registration-button" modifier="primary">Next</Button>
        </div>
        <div className="basic-info__signup">
          <span className="basic-info__signup-title">Or sign up with:</span>
          <SocialButton
            className="basic-info__signup-item"
            modifier="facebook"
            text="Facebook"
          />
          <SocialButton
            className="basic-info__signup-item"
            modifier="google"
            text="Google"
          />
        </div>
      </div>
    </div>
  </div>
);

export default SignupBasicInfo;
