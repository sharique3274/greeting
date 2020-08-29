import React, { Component } from 'react';
import './App.css';
import Header from './component/header/header';
import CheckBox from './component/check-box/check-box';
import InputBox from './component/input-box/input-box';
import appConfiguration from './config/app-configuration';

class App extends Component {
  appConfig = new appConfiguration();
  state = {
    firstName: '',
    lastName: '',
    disabled: false,
    errors: {},
  };

  onCheckboxChanged = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
    this.lastName.value = '';
  };

  validateInput = () => {
    const { disabled } = this.state;
    const errors = {};
    if (this.firstName.value.trim() === '') {
      errors.firstName = this.appConfig.FIRST_NAME_FIELD['ERROR_MSG'];
    }
    if (this.lastName.value.trim() === '' && !disabled) {
      errors.lastName = this.appConfig.LAST_NAME_FIELD['ERROR_MSG'];
    }

    return Object.keys(errors).length === 0 ? '' : errors;
  };

  onGreetSubmit = (e) => {
    console.log(e);
    const { disabled } = this.state;

    const errors = this.validateInput();

    this.setState({ errors });
    if (errors) return;

    this.setState({
      firstName: this.firstName.value,
      lastName: disabled
        ? this.appConfig.DISABLED_LAST_NAME_MSG
        : this.lastName.value,
      disabled: false,
    });
    this.firstName.value = '';
    this.lastName.value = '';
  };

  onChange = (e) => {
    const { errors } = this.state;
    delete errors[e.target.name];
    this.setState({
      errors,
    });
  };

  render() {
    const { firstName, lastName, disabled, errors } = this.state;
    return (
      <div data-test='component-app'>
        <Header
          data-test='app-header'
          lastName={lastName}
          firstName={firstName}
        />

        <div className='input-div'>
          <InputBox
            ref={(input) => {
              this.firstName = input;
            }}
            type={this.appConfig.FIRST_NAME_FIELD['TYPE']}
            placeholder={this.appConfig.FIRST_NAME_FIELD['PLACEHOLDER']}
            onChange={this.onChange}
            isLabel={false}
            error={errors.firstName}
            name={this.appConfig.FIRST_NAME_FIELD['NAME']}
            autoFocus={true}
          />
          <CheckBox
            name={this.appConfig.GREET_CHECKBOX_FIELD['NAME']}
            checked={disabled}
            onChange={this.onCheckboxChanged}
          />
          <InputBox
            ref={(input) => {
              this.lastName = input;
            }}
            type={this.appConfig.LAST_NAME_FIELD['TYPE']}
            disabled={disabled}
            isLabel={false}
            error={!disabled ? errors.lastName : ''}
            onChange={this.onChange}
            placeholder={this.appConfig.LAST_NAME_FIELD['PLACEHOLDER']}
            name={this.appConfig.LAST_NAME_FIELD['NAME']}
          />
        </div>
        <button
          data-test='greet-btn'
          className='btn'
          onClick={this.onGreetSubmit}
        >
          {this.appConfig.GREET_BUTTON_NAME}
        </button>
      </div>
    );
  }
}

export default App;
