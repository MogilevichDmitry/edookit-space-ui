import React from 'react';
import Icon from '../icon/icon.jsx';
import IconSchool from '!raw-loader!../../resources/icons/icon-school.svg';
import InputField from '../input-field/input-field.jsx';
import Selector from '../selector/selector.jsx';
import Button from '../button/button.jsx';

const schools = [
  {
    title: 'School #1'
  },
  {
    title: 'School #2'
  },
  {
    title: 'School #3'
  }
];

const roles = [
  {
    title: 'student'
  },
  {
    title: 'teacher'
  },
  {
    title: 'pupil'
  }
];

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
        isSelector={true}
        placeholder="Select Your School"
        selectorList={schools}
      />
      <InputField
        label="Your role:"
        isSelector={true}
        placeholder="Select a role"
        selectorList={roles}
      />
      <Button className="signup__school-form-button" modifier="primary">Complete</Button>
    </form>
  </div>
);

export default SignupBasicInfo;
