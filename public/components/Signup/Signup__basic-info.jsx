import React from 'react';
import Icon from '../icon/icon.jsx';
import IconBasicInfo from '!raw-loader!../../resources/icons/icon-basic-info.svg';
import InputField from '../input-field/input-field.jsx';
import IconMail from '!raw-loader!../../resources/icons/icon-mail.svg';
import IconFullName from '!raw-loader!../../resources/icons/icon-full-name.svg';
import Button from '../button/button.jsx';
import SocialButton from '../social-button/social-button.jsx';
import Divider from '../divider/divider.jsx';

const SignupBasicInfo = () => (
  <div className="signup__basic">
    <span className="signup__item-picture">
      <Icon svg={IconBasicInfo}/>
    </span>
    <div className="signup__basic-main">
      <form className="signup__basic-form">
        <InputField
          label="E-mail:"
          placeholder="name@example.com"
          type="email"
          icon={IconMail}
        />
        <span className="signup__basic-form-description">
          We promise you, we won't SPAM you!
        </span>
        <InputField
          label="Full name:"
          placeholder="Your name"
          type="email"
          icon={IconFullName}
        />
        <Button className="signup__basic-form-button" modifier="primary">Next</Button>
      </form>
      <div className="signup__basic-socials">
        <span className="signup__basic-socials-title">Or sign up with:</span>
        <SocialButton
          className="signup__basic-socials-item"
          modifier="facebook"
          text="Facebook"
        />
        <SocialButton
          className="signup__basic-socials-item"
          modifier="google"
          text="Google"
        />
        <Divider className="signup__basic-divider">or</Divider>
      </div>
    </div>
  </div>
);

export default SignupBasicInfo;
