import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon/icon.jsx';
import IconNotification from '!raw-loader!../../resources/icons/icon-notification.svg';
import './button-notification.less';

const ButtonNotification = ({className}) => (
  <button className={classnames('button-notification', className)}>
    <Icon svg={IconNotification} />
  </button>
);

ButtonNotification.propTypes = {
  className: PropTypes.string
}

export default ButtonNotification;
