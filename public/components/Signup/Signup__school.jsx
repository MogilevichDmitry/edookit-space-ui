import React from 'react';
import Icon from '../icon/icon.jsx';
import IconSchool from '!raw-loader!../../resources/icons/icon-school.svg';
import InputField from '../input-field/input-field.jsx';
import Button from '../button/button.jsx';

const SignupBasicInfo = () => (
  <div className="signup__school">
    <span className="signup__item-picture">
      <Icon svg={IconSchool}/>
    </span>
    <h3 className="signup__school-title">
      You are almost done.
    </h3>
    <form className="signup__school-form">
      <InputField
        label="Your school:"
        placeholder="Select Your School"
        type="select"
      />
      <InputField
        label="Your role:"
        placeholder="Select a role"
        type="select"
      />
      <Button className="signup__school-form-button" modifier="primary">Complete</Button>
    </form>
  </div>
);

export default SignupBasicInfo;
