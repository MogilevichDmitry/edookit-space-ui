import React from 'react';
import LoginHeader from './Login__header.jsx';
import LoginForm from './Login__form.jsx';
import LoginFooter from './Login__footer.jsx';
import SocialButton from '../social-button/social-button.jsx';
import './Login.less';

export default class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <LoginHeader />
        <div className="login__socials">
          <SocialButton className="login__socials-item" modifier="Facebook" />
          <SocialButton className="login__socials-item" modifier="Google" />
        </div>
        <div className="login__delimiter">
          <span className="login__delimiter-text">or</span>
        </div>
        <LoginForm />
        <LoginFooter />
      </div>
    );
  }
}
