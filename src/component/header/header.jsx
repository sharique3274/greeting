import React from 'react';
import './header.css';

const Header = ({ firstName, lastName }) => {
  return (
    <div data-test='header-comp' className='header-div'>
      <p>Welcome {`${firstName} ${lastName}`}</p>
    </div>
  );
};

export default Header;
