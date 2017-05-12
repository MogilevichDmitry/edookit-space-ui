import React from 'react';
import Icon from '../icon/icon.jsx';
import IconMail from '!raw-loader!../../resources/icons/icon-mail.svg';
import Checkbox from '../checkbox/checkbox.jsx';
import Button from '../button/button.jsx';
import InputField from '../input-field/input-field.jsx';
import ButtonShowPassword from '../button-show-password/button-show-password.jsx';

const LoginForm = () => (
  <form className="login__form">
    <InputField
      className="login__form-field-mail"
      label="E-mail"
      type="email"
      placeholder="name@example.com"
      icon={IconMail}
    />
    <InputField
      className="login__form-field-password"
      label="Password"
      type="password"
      placeholder="Type your password"
      button={<ButtonShowPassword />}
    />
    <div className="login__form-utility">
      <Checkbox className="login__form-utility-checkbox" label="Remember me"/>
      <a className="login__form-utility-link" href="#">Forgot password?</a>
    </div>
    <Button className="login__form-button" modifier="primary">Login</Button>
  </form>
)

export default LoginForm;
