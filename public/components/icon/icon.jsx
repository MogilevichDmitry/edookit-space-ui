import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';
import './icon.less';

const Icon = ({className, svg}) => (
  <SVGInline className={classnames('icon', className)} svg={svg} />
);

Icon.propTypes = {
  className: PropTypes.string,
  svg: PropTypes.string
};

export default Icon;
