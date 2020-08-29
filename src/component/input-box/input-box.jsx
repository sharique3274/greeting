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
    customClass,
    placeholder,
    showError,
    disabled,
    errorMessage,
  },
  ref
) => {
  return (
    <div>
      {isLabel ? <label htmlFor={name}>{label}</label> : ''}
      <input
        id={name}
        ref={ref}
        type={type}
        onChange={onChange}
        name={name}
        className={customClass}
        placeholder={placeholder}
        disabled={disabled}
      />
      {showError ? <p className='err-style'>{errorMessage}</p> : ''}
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
  customClass: PropTypes.string,
  placeholder: PropTypes.string,
  showError: PropTypes.bool,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
};
InputBox.defaultProps = {
  isLabel: true,
  onChange: () => {},
  customClass: '',
  placeholder: '',
  showError: false,
  disabled: false,
  errorMessage: '',
};

export default forwardRInputWithRef;
