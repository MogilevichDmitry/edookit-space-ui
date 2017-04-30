import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/icon.jsx';
import IconFacebook from '!raw-loader!../../resources/icons/icon-facebook.svg';
import IconGoogle from '!raw-loader!../../resources/icons/icon-google.svg';

import './social-button.less';

const FACEBOOK = 'FACEBOOK';
const GOOGLE = 'GOOGLE';

const SocialButton = ({className, modifier}) => {
  const socialNetwork = modifier;

  return (
    <button className={`social-button social-button_${socialNetwork} ${className}`}>
      {renderIcon(socialNetwork)}
      <span className="social-button__title">
        {`Log in with ${socialNetwork}`}
      </span>
    </button>
  );
}

const renderIcon = (socialNetwork) => {
  const socialNetworkType = socialNetwork.toUpperCase();

  if ( socialNetworkType === FACEBOOK ) {
    return (
      <Icon
        className={`social-button__icon social-button__icon_${FACEBOOK}`}
        svg={IconFacebook}
      />
    );
  } else if ( socialNetworkType === GOOGLE ) {
    return (
      <Icon
        className={`social-button__icon social-button__icon_${GOOGLE}`}
        svg={IconGoogle}
      />
    );
  }
}

SocialButton.propTypes = {
  modifier: PropTypes.string,
  modifier: PropTypes.string
};

export default SocialButton;
