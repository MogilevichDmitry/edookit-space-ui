import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AlertCount from '../alert-count/alert-count.jsx';
import ButtonNotification from '../button-notification/button-notification.jsx';

import './notifications.less';

const Notifications = ({className, alerts}) => (
  <div className={classnames('notifications', className)}>
    <ButtonNotification className="notifications__button"/>
    {alerts && <AlertCount className="notifications__alert" count={alerts}/>}
  </div>
)

Notifications.propTypes = {
  alerts: PropTypes.number
}

export default Notifications;
