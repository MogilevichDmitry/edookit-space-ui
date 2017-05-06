import React from 'react';
import SingupHeader from './Signup__header.jsx';
import SignupBasicInfo from './Signup__basic-info.jsx';
import SignupPassword from './Signup__password.jsx';
import SignupSchool from './Signup__school.jsx';
import LineTabs from '../line-tabs/line-tabs.jsx';
import './Signup.less';

const tabsItems = [
  {
    title: 'Basic Info',
    modifier: 'completed'
  },
  {
    title: 'Password',
    modifier: 'active'
  },
  {
    title: 'School'
  }
]

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      activeIndex: 0
    }
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <div className="signup">
        <SingupHeader />
        {activeIndex === 0 && <SignupBasicInfo />}
        {activeIndex === 1 && <SignupPassword />}
        {activeIndex === 2 && <SignupSchool />}
        <LineTabs items={tabsItems} className="signup__item-line-tabs" />
      </div>
    );
  }
}

export default Signup;
