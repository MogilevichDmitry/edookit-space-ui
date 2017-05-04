import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './line-tabs.less';

const LineTabs = () => (
  <div className="line-tabs">
    <div className="line-tabs__item">
      <span className="line-tabs__item-circle"></span>
      <span className="line-tabs__item-title">Basic Info</span>
    </div>
    <div className="line-tabs__item">
      <span className="line-tabs__item-circle"></span>
      <span className="line-tabs__item-title">Password</span>
    </div>
    <div className="line-tabs__item">
      <span className="line-tabs__item-circle"></span>
      <span className="line-tabs__item-title">School</span>
    </div>
  </div>
)

export default LineTabs;
