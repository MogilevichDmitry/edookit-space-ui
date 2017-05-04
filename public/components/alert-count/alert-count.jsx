import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './alert-count.less';

const AlertCount = ({className, count}) => {

  return(
    <span className={classnames('alert-count', className)}>
      {count}
    </span>
  )
};

AlertCount.propTypes = {
  count: PropTypes.number,
  className: PropTypes.string
}

export default AlertCount;
