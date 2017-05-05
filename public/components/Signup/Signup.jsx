import React from 'react';
import SingupHeader from './Signup__header.jsx';
import SignupItem from './Signup__item.jsx';
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
      activeIndex: 2
    }
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <div className="signup">
        <SingupHeader />
        {activeIndex === 0 && <div>basic</div>}
        {activeIndex === 1 && <div>password</div>}
        {activeIndex === 2 && <div>school</div>}
        <LineTabs items={tabsItems} className="signup__item-line-tabs" />
      </div>
    );
  }
}

export default Signup;
