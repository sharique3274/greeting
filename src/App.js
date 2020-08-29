import React, { Component } from 'react';
import './App.css';
import Header from './component/header/header';
import CheckBox from './component/check-box/check-box';

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
          <input
            ref={(input) => {
              this.firstName = input;
            }}
            type='text'
            className={showError ? 'inpt-box err' : 'inpt-box'}
            placeholder='F NAME'
            onChange={this.onFNameChange}
          />
          {showError ? (
            <p className='err-style'>Please enter first name</p>
          ) : (
            ''
          )}
          <CheckBox
            name='No LNAME'
            checked={disabled}
            onChange={this.onCheckboxChanged}
          />
          <input
            ref={(input) => {
              this.lastName = input;
            }}
            type='text'
            disabled={disabled}
            className='inpt-box'
            placeholder='L NAME'
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
