import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon/icon.jsx';
import IconShowPassword from '!raw-loader!../../resources/icons/icon-show-password.svg';
import './button-show-password.less';

const ButtonShowPassword = ({className}) => (
  <button className={classnames('button-show-password', className)}>
    <Icon svg={IconShowPassword} />
  </button>
);

ButtonShowPassword.propTypes = {
  className: PropTypes.string
}

export default ButtonShowPassword;
