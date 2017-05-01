import React from 'react';
import Header from '../header/header.jsx';
import AppsCompilationItems from './Apps__compilation-items.jsx';
import './Apps.less';

import user from '../../data/user.data.js';

const Apps = () => (
  <div className="apps">
    <Header user={user} />
    <h1 className="apps__title">{`Hi ${user.name}, welcome back to your space.`}</h1>
    <AppsCompilationItems />
  </div>
)

export default Apps;
