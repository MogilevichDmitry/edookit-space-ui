import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/icon.jsx';
import IconSearch from '!raw-loader!../../resources/icons/icon-search.svg';
import './search-input.less';

const SearchInput = ({className, placeholder}) => (
  <div className={`search-input ${className}`}>
    <input
      className="search-input__input"
      type="text"
      id="search-input"
      placeholder={placeholder}
    />
    <label className="search-input__label" htmlFor="search-input">
      <Icon className="search-input__icon" svg={IconSearch}/>
    </label>
  </div>
)

SearchInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string
}

export default SearchInput;
