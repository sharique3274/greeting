import React from 'react';
import PropTypes from 'prop-types';
import './check-box.css';

const CheckBox = ({ name, onChange, checked }) => {
  return (
    <div>
      <label className='check-label' htmlFor={name}>
        <input
          data-test='check-comp'
          id={name}
          type='checkbox'
          onChange={onChange}
          checked={checked}
          name={name}
        />
        {name}
      </label>
    </div>
  );
};

CheckBox.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
};
CheckBox.defaultProps = {
  checked: false,
  name: '',
  onChange: () => {},
};

export default CheckBox;
