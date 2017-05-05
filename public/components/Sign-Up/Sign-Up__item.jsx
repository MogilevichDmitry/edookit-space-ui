import React from 'react';
import Icon from '../icon/icon.jsx';
import LineTabs from '../line-tabs/line-tabs.jsx';
import IconLogo from '!raw-loader!../../resources/icons/icon-sign-up-logo.svg';

import './Sign-Up.less';

const SignUpItem = () => (
  <div className="sign-up__item">
    <div className="sign-up__item-logo">
      <Icon svg={IconLogo}/>
    </div>
    <div className="sign-up__item-header">
        <h1 className="sign-up__item-header_title">
          Join the most advanced communication portal for schools, teachers, parents and students.
        </h1>
        <span className="sign-up__item-header_description">
          It takes less then 30 seconds to sign up.
        </span>
    </div>
    <div className="sign-up__item-form"></div>
    <LineTabs className="sign-up__item-line-tabs" />
  </div>
)

export default SignUpItem;
