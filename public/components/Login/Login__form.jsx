import React from 'react';
import Checkbox from '../checkbox/checkbox.jsx';
import Button from '../button/button.jsx';

const LoginForm = () => (
  <form className="login__form">
    <div className="login__form-field">
      <label className="login__form-field-label" htmlFor="login-input-name">
        E-mail
      </label>
      <input
        className="login__form-field-input"
        type="text"
        id="login-input-name"
        placeholder="name@example.com"
      />
    </div>
    <div className="login__form-field">
      <label className="login__form-field-label" htmlFor="login-input-password">
        Password
      </label>
      <input
        className="login__form-field-input"
        type="text"
        id="login-input-password"
        placeholder="Type your password"
      />
    </div>
    <div className="login__form-utility">
      <Checkbox className="login__form-utility-checkbox" label="Remember me"/>
      <a className="login__form-utility-link" href="#">Forgot password?</a>
    </div>
    <Button className="login__form-button" modifier="primary">Login</Button>
  </form>
)

export default LoginForm;
