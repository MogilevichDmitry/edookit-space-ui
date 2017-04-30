import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.less';

const Checkbox = ({label, className}) => (
  <div className="checkbox">
    <input className="checkbox__input" id={`input-${label}`} type="checkbox"/>
    <label className="checkbox__label" htmlFor={`input-${label}`}>{label}</label>
  </div>
);

Checkbox.propTypes = {
 label: PropTypes.string,
 className: PropTypes.string
}

export default Checkbox;
