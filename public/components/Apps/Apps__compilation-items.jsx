import React from 'react';
import PropTypes from 'prop-types';
import AppsItem from './Apps__item.jsx';

const AppsCompilationItems = ({data}) => (
  <div className="apps__compilation">
    <h2 className="apps__compilation-title">{data.title}</h2>
    <div className="apps__compilation-description">
      {data.description}
    </div>
    <div className="apps__compilation-items">
      {data.items.map((item) => (
        <AppsItem key={item.id} data={item} />
      ))}
    </div>
  </div>
)

AppsCompilationItems.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.array
  })
}

export default AppsCompilationItems;
