import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './divider.less';

const Divider = ({children, className}) => (
  <div className={classnames('divider', className)}>
    <div className="divider-text">{children}</div>
  </div>
)

Divider.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Divider;
