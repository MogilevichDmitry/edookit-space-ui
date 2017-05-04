import React from 'react';
import PropTypes from 'prop-types';
import ButtonAppMenu from '../button-app-menu/button-app-menu.jsx';
import Notifications from '../notifications/notifications.jsx';
import ButtonUserMenu from '../button-user-menu/button-user-menu.jsx';
import './user-controls.less';

const UserControls = ({alert, user}) => (
  <div className="user-controls">
    <ButtonAppMenu className="user-controls__button-menu" />
    <Notifications alert={alert} />
    <div className="user-controls__username">
      {`${user.name} ${user.family}`}
    </div>
    <ButtonUserMenu className="user-controls__button-user-menu" />
  </div>
)

UserControls.propTypes = {
  alert: PropTypes.number,
  user: PropTypes.object
}

export default UserControls;
