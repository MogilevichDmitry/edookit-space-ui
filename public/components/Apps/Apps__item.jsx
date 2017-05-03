import React from 'react';
import Icon from '../icon/icon.jsx';
import IconChat from '!raw-loader!../../resources/icons/icon-chat.svg';
import IconShare from '!raw-loader!../../resources/icons/icon-share.svg';
import IconSchools from '!raw-loader!../../resources/icons/icon-schools.svg';
import IconWebBuilder from '!raw-loader!../../resources/icons/icon-web-builder.svg';
import IconSkolaris from '!raw-loader!../../resources/icons/icon-skolaris.svg';
import IconEdookit from '!raw-loader!../../resources/icons/icon-edookit.svg';

const CHAT = 'CHAT';
const SHARE = 'SHARE';
const SCHOOLS = 'SCHOOLS';
const WEBBUILDER = 'WEBBUILDER';
const SKOLARIS = 'SKOLARIS';

const AppsItem = ({data}) => (
  <div className="apps__item">
    <div className={`apps__item-picture apps__item-picture_${data.modifier}`}>
      {renderIcon(data.modifier)}
    </div>
    <div className="apps__item-main">
      <div className="apps__item-title">
        {data.title}
      </div>
      <div className="apps__item-description">
        {data.description}
      </div>
    </div>
  </div>
)

const renderIcon = (modifier) => {
  switch(modifier.toUpperCase()) {
    case CHAT:
      return <Icon svg={IconChat}/>;
      break;
    case SHARE:
      return <Icon svg={IconShare}/>;
      break;
    case SCHOOLS:
      return <Icon svg={IconSchools}/>;
      break;
    case WEBBUILDER:
      return <Icon svg={IconWebBuilder}/>;
      break;
    case SKOLARIS:
      return <Icon svg={IconSkolaris}/>;
      break;
    default:
      return <Icon svg={IconEdookit}/>;
      break;
  }
}

export default AppsItem;
