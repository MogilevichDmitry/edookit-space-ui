import React from 'react';
import PropTypes from 'prop-types';
import ButtonAppMenu from '../button-app-menu/button-app-menu.jsx';
import Notifications from '../notifications/notifications.jsx';
import ButtonUserMenu from '../button-user-menu/button-user-menu.jsx';
import './user-controls.less';

const UserControls = ({alerts, user}) => (
  <div className="user-controls">
    <ButtonAppMenu className="user-controls__button-menu" />
    <Notifications className="user-controls__notifications" alerts={alerts} />
    <div className="user-controls__username">
      {`${user.name} ${user.family}`}
    </div>
    <ButtonUserMenu className="user-controls__button-user-menu" />
  </div>
)

UserControls.propTypes = {
  alerts: PropTypes.number,
  user: PropTypes.object
}

export default UserControls;
