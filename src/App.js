import React, { Component } from 'react';
import './App.css';
import Header from './component/header/header';
import CheckBox from './component/check-box/check-box';
import InputBox from './component/input-box/input-box';

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    disabled: false,
    showError: false,
  };
  onCheckboxChanged = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
    this.lastName.value = '';
  };

  onGreetClicked = () => {
    const { disabled } = this.state;
    if (this.firstName.value === '') {
      this.setState({
        showError: true,
      });
    } else {
      this.setState({
        firstName: this.firstName.value,
        lastName: disabled ? 'LNU' : this.lastName.value,
      });
      this.firstName.value = '';
      this.lastName.value = '';
    }
  };
  onFNameChange = () => {
    this.setState({
      showError: false,
    });
  };
  render() {
    const { firstName, lastName, disabled, showError } = this.state;
    return (
      <div>
        <Header lastName={lastName} firstName={firstName} />
        <div className='input-div'>
          <InputBox
            ref={(input) => {
              this.firstName = input;
            }}
            type='text'
            customClass={showError ? 'inpt-box err' : 'inpt-box'}
            placeholder='F NAME'
            onChange={this.onFNameChange}
            showError={showError}
            // errorMessage='Please enter first name.'
          />

          <CheckBox
            name='No LNAME'
            checked={disabled}
            onChange={this.onCheckboxChanged}
          />
          <InputBox
            ref={(input) => {
              this.lastName = input;
            }}
            type='text'
            disabled={disabled}
            customClass='inpt-box'
            isLabel={false}
            placeholder='L NAME'
            name='lastName'
          />
        </div>

        <button className='btn' onClick={this.onGreetClicked}>
          GREET ME
        </button>
      </div>
    );
  }
}

export default App;
