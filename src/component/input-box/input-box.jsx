import React from 'react';
import PropTypes from 'prop-types';
import './input-box.css';

const InputBox = (
  {
    name,
    onChange,
    type,
    isLabel,
    label,
    placeholder,
    error,
    disabled,
    autoFocus,
  },
  ref
) => {
  return (
    <div>
      {isLabel ? <label htmlFor={name}>{label}</label> : ''}
      <input
        data-test='inpt-comp'
        id={name}
        ref={ref}
        type={type}
        onChange={onChange}
        name={name}
        className={error ? 'inpt-box err' : 'inpt-box'}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
      />
      {error && (
        <div className='err-div'>
          <img className='warn-img' src='./images/warn.png' alt='warn' />
          <p className='err-style'>{error}</p>
        </div>
      )}
    </div>
  );
};
const forwardRInputWithRef = React.forwardRef(InputBox);

InputBox.propTypes = {
  isLabel: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  error: PropTypes.string,
};
InputBox.defaultProps = {
  isLabel: true,
  onChange: () => {},
  placeholder: '',
  disabled: false,
  autoFocus: false,
  error: '',
};

export default forwardRInputWithRef;
