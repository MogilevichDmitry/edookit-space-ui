import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon/icon.jsx';
import IconMenu from '!raw-loader!../../resources/icons/icon-app-menu.svg';
import './button-app-menu.less';

const ButtonAppMenu = ({className}) => (
  <button className={classnames('btn-app-menu', className)}>
    <Icon svg={IconMenu} />
  </button>
);

ButtonAppMenu.propTypes = {
  className: PropTypes.string
}

export default ButtonAppMenu;
