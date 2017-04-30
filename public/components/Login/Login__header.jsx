import React from 'react';
import LogoSpace from '../logo-space/logo-space.jsx';
import ButtonUserMenu from '../button-user-menu/button-user-menu.jsx';

const LoginHeader = () => (
  <div className="login__header">
    <LogoSpace className="login__header-logo" />
    <ButtonUserMenu />
  </div>
);

export default LoginHeader;
