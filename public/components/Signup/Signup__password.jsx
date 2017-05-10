import React from 'react';
import Icon from '../icon/icon.jsx';
import IconPassword from '!raw-loader!../../resources/icons/icon-password.svg';
import InputField from '../input-field/input-field.jsx';
import Button from '../button/button.jsx';
import ButtonShowPassword from '../button-show-password/button-show-password.jsx';

const SignupPassword = () => (
  <div className="signup__password">
      <span className="signup__item-picture">
        <Icon svg={IconPassword}/>
      </span>
      <form className="signup__password-form">
        <InputField
          label="Type in your new password:"
          placeholder="Your new password"
          type="password"
          button={<ButtonShowPassword />}
        />
        <div className="signup__password-form-title">
          Password must be at least 6 characters
        </div>
        <div className="signup__password-form-title">
          Must contain at least one number and one letter
        </div>
        <Button className="signup__password-form-button" modifier="primary">Next</Button>
      </form>
    </div>
);

export default SignupPassword;
