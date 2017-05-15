import React from 'react';

const SelectorItem = ({ option, onClick }) => (
  <div className="selector__item" onClick={onClick}>
    {option.title}
  </div>
);

export default SelectorItem;
