import React from 'react';
import AppsItem from './Apps__item.jsx';
import PropTypes from 'prop-types';

const AppsCompilationItems = () => (
  <div className="apps__compilation">
    <h2 className="apps__compilation-title">Your Active Apps</h2>
    <div className="apps__compilation-description">
      From this section you can go to applications you are already using.
    </div>
    <div className="apps__compilation-items">
      <AppsItem />
    </div>
  </div>
)

export default AppsCompilationItems;
