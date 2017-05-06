import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../button/button.jsx';
import Icon from '../icon/icon.jsx';

import './input-field.less';

const InputField = ({className, label, icon, button, type, placeholder}) => (
  <div className={classnames('input-field', className)}>
    {label &&
      <label
        className="input-field__label"
        htmlFor={`input-${label}`}
      >
        {label}
      </label>
    }
    <div className="input-field__input-wrapper">
      <input
        className="input-field__input"
        id={`input-${label}`}
        type={type}
        placeholder={placeholder}
      />
      {icon && <Icon className="input-field__icon" svg={icon} />}
      {button && <div className="input-field__button">{button}</div>}
    </div>
  </div>
)

InputField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.node,
  button: PropTypes.node,
  type: PropTypes.string,
  placeholder: PropTypes.string
}

InputField.defaultProps = {
  type: 'text'
}

export default InputField;
