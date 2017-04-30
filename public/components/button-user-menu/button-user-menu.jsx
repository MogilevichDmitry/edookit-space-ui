import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon/icon.jsx';
import IconUserMenu from '!raw-loader!../../resources/icons/icon-user-menu.svg';
import './button-user-menu.less';

const ButtonUserMenu = ({className}) => (
  <button className={classnames('btn-user-menu', className)}>
    <Icon svg={IconUserMenu} />
  </button>
);

ButtonUserMenu.propTypes = {
  className: PropTypes.string
}

export default ButtonUserMenu;
