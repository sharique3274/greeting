import React from 'react';
import './header.css';
import PropTypes from 'prop-types';

const Header = ({ firstName, lastName }) => {
  return (
    <div data-test='header-comp' className='header-div'>
      <p>Welcome {`${firstName} ${lastName}`}</p>
    </div>
  );
};
Header.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};
Header.defaultProps = {
  firstName: '',
  lastName: '',
};
export default Header;
