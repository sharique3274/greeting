import React from 'react';
import PropTypes from 'prop-types';
import './check-box.css';

const CheckBox = ({ name, onChange, checked }) => {
  return (
    <div>
      <label className='check-label' htmlFor={name}>
        <input
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
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
CheckBox.defaultProps = {
  checked: false,
};

export default CheckBox;
