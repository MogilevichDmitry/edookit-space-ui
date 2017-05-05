import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from '../search-input/search-input.jsx';
import UserControls from '../user-controls/user-controls.jsx';
import './header.less';

const Header = ({alerts, user}) => (
  <div className="header">
    <SearchInput className="header__search" placeholder="Search Edookit Space..."/>
    <UserControls alerts={alerts} user={user}/>
  </div>
)

Header.propTypes = {
  alerts: PropTypes.number,
  user: PropTypes.object
}

export default Header;
