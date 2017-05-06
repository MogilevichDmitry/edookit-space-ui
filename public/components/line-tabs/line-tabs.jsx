import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './line-tabs.less';

const LineTabs = ({items, handler, activeIndex}) => (
  <div className="line-tabs">
    {items.map((item, index) => {
      const isActive = activeIndex === index;
      const isCompleted = activeIndex > index;

      return (
        <div className={classnames({
            'line-tabs__item': true,
            'line-tabs__item_active': isActive,
            'line-tabs__item_completed': isCompleted
          })}
          key={index}
          onClick={() => handler(index)}
        >
          <span className="line-tabs__item-circle"></span>
          <span className="line-tabs__item-title">{item.title}</span>
        </div>
      );
    })}
  </div>
);

LineTabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    modifier: PropTypes.string
  })),
  handler: PropTypes.func,
  activeIndex: PropTypes.number
}

export default LineTabs;
