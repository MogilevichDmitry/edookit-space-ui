import React from 'react';
import classnames from 'classnames';
import Button from '../button/button.jsx';
import SignupHeader from './Signup__header.jsx';
import SignupBasicInfo from './Signup__basic-info.jsx';
import SignupPassword from './Signup__password.jsx';
import SignupSchool from './Signup__school.jsx';
import LineTabs from '../line-tabs/line-tabs.jsx';
import './Signup.less';

const tabsItems = ['Start', 'Basic Info', 'Password', 'School'];

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      width: window.innerWidth,
      activeIndex: 0
    }

    this.handleTab = this.handleTab.bind(this);
  }

  updateDimensions() {
    if (this.state.width !== window.innerWidth) {
      this.setState({ width: window.innerWidth });
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
    if (this.state.width > 960) {
      this.setState({activeIndex: 1})
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  handleTab(index) {
    this.setState({activeIndex: index});
  }

  render() {
    const { activeIndex } = this.state;

    return (
      <div className={classnames({
          'signup': true,
          'signup_withStart': this.state.width < 960
        })}>
        <SignupHeader />
        {activeIndex === 0 &&
          <div className="signup__start">
            <SignupHeader className="signup__start-header" />
            <Button className="signup__start-button" modifier="primary">Next</Button>
          </div>
        }
        <div className="signup__item">
          {activeIndex === 1 && <SignupBasicInfo />}
          {activeIndex === 2 && <SignupPassword />}
          {activeIndex === 3 && <SignupSchool />}
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
