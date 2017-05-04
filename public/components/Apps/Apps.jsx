import React from 'react';
import Header from '../header/header.jsx';
import AppsCompilationItems from './Apps__compilation-items.jsx';
import './Apps.less';

import user from '../../data/user.data.js';
import data from '../../data/apps.data.js';

const Apps = () => (
  <div className="apps">
    <Header alert={2} user={user} />
    <h1 className="apps__title">{`Hi ${user.name}, welcome back to your space.`}</h1>
    <div className="apps__compilations-wrapper">
      {data.map((item) => (
        <AppsCompilationItems key={item.id} data={item} />
      ))}
    </div>
  </div>
)

export default Apps;
