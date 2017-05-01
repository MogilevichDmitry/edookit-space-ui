import React from 'react';
import PropTypes from 'prop-types';
import ButtonAppMenu from '../button-app-menu/button-app-menu.jsx';
import ButtonNotification from '../button-notification/button-notification.jsx';
import './user-controls.less';

const UserControls = ({user}) => (
  <div className="user-controls">
    <ButtonAppMenu className="user-controls__button-menu" />
    <ButtonNotification className="user-controls__button-notification" />
    <div className="user-controls__username">
      {`${user.name} ${user.family}`}
    </div>
  </div>
)

UserControls.propTypes = {
  user: PropTypes.object
}

export default UserControls;
