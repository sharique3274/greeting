import React from 'react';
import './header.css';

const Header = ({ firstName, lastName }) => {
  return (
    <div className='header-div'>
      <p>Welcome {`${firstName} ${lastName}`}</p>
    </div>
  );
};

export default Header;
