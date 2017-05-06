import React from 'react';
import Button from '../button/button.jsx';
import Icon from '../icon/icon.jsx';
import classnames from 'classnames';

import from './input-field.less';

const InputField = () => (
  <div className={'', className}>
    {title && <div>{title}</div>}
    <input placeholder={placeholder} />
    {icon && <Icon svg={icon}/>}
    {button && </button>}
  </div>
);

export default InputField;
