import React from 'react';
import LoginHeader from './Login__header.jsx';
import LoginForm from './Login__form.jsx';
import LoginFooter from './Login__footer.jsx';
import SocialButton from '../social-button/social-button.jsx';
import Divider from '../divider/divider.jsx';
import LogoSchoolspot from '../logo-schoolspot/logo-schoolspot.jsx';

import './Login.less';

export default class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <LoginHeader />
        <div className="login__main-form">
          <div className="login__socials">
            <SocialButton
              className="login__socials-item"
              modifier="facebook"
              text="Log in with Facebook"
            />
            <SocialButton
              className="login__socials-item"
              modifier="google"
              text="Log in with Google"
            />
          </div>
          <Divider className="login__divider">or</Divider>
          <LoginForm />
          <LogoSchoolspot className="login__main-form-logo" />
        </div>
        <LoginFooter />
      </div>
    );
  }
}
