import React from 'react';
import './header.css';
import PropTypes from 'prop-types';

const Header = ({ greetMsg, firstName, lastName }) => {
  return (
    <div data-test='header-comp' className='header-div'>
      <p>{`${greetMsg} ${firstName} ${lastName}`}</p>
    </div>
  );
};
Header.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  greetMsg: PropTypes.string,
};
Header.defaultProps = {
  firstName: '',
  lastName: '',
  greetMsg: 'Welcome',
};
export default Header;
