import React from 'react';
import SingupHeader from './Signup__header.jsx';
import SignupBasicInfo from './Signup__basic-info.jsx';
import SignupPassword from './Signup__password.jsx';
import SignupSchool from './Signup__school.jsx';
import LineTabs from '../line-tabs/line-tabs.jsx';
import './Signup.less';

const tabsItems = [
  {
    title: 'Basic Info'
  },
  {
    title: 'Password'
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

    this.handleTab = this.handleTab.bind(this);
  }

  handleTab(index) {
    this.setState({activeIndex: index});
  }

  render() {
    const { activeIndex } = this.state;

    return (
      <div className="signup">
        <SingupHeader />
        <div className="signup__item">
          {activeIndex === 0 && <SignupBasicInfo />}
          {activeIndex === 1 && <SignupPassword />}
          {activeIndex === 2 && <SignupSchool />}
        </div>
        <LineTabs
          items={tabsItems}
          handler={this.handleTab}
          className="signup__item-line-tabs"
          activeIndex={activeIndex}
        />
      </div>
    );
  }
}



export default Signup;
