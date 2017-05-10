import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import LogoSchoolspot from '../logo-schoolspot/logo-schoolspot.jsx';

const SignupHeader = ({className}) => (
  <div className={classnames('signup__header', className)}>
    <LogoSchoolspot className="signup__header-logo" />
    <h1 className="signup__header-title">
      Join the most advanced communication portal for schools, teachers, parents and students.
    </h1>
    <h2 className="signup__header-second-title">
      It takes less then 30 seconds to sign up.
    </h2>
  </div>
);

SignupHeader.propTypes = {
  className: PropTypes.string
}

export default SignupHeader;
