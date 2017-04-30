import React from 'react';
import PropTypes from 'prop-types';
import './button.less';

const Button = ({children, className, modifier}) => (
  <button className={`button button_${modifier} ${className}`}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  modifier: PropTypes.string
}

export default Button;
