import React from 'react';
import Button from '../button/button.jsx';

const LoginFooter = () => (
  <div className="login__footer">
    <span className="login__footer-description">Don't have an account?</span>
    <Button className="login__footer-button" modifier="secondary">Sign Up</Button>
  </div>
)

export default LoginFooter;
