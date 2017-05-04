import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AlertCount from '../alert-count/alert-count.jsx';
import ButtonNotification from '../button-notification/button-notification.jsx';

import './notifications.less';

const Notifications = ({alert}) => (
  <div className="notifications">
    <ButtonNotification className="notifications__btn"/>
    {alert ?
      <AlertCount className="notifications__alert" count={alert}/>
      : null
    }
  </div>
)

Notifications.propTypes = {
  alert: PropTypes.number
}

export default Notifications;
