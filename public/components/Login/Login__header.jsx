import React from 'react';
import LogoSchoolspot from '../logo-schoolspot/logo-schoolspot.jsx';
import ButtonUserMenu from '../button-user-menu/button-user-menu.jsx';

const LoginHeader = () => (
  <div className="login__header">
    <LogoSchoolspot className="login__header-logo" />
    <ButtonUserMenu className="login__header-menu" />
  </div>
);

export default LoginHeader;
