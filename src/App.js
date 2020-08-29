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
        lastName: disabled
          ? this.appConfig.DISABLED_LAST_NAME_MSG
          : this.lastName.value,
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
            type={this.appConfig.FIRST_NAME_FIELD['TYPE']}
            placeholder={this.appConfig.FIRST_NAME_FIELD['PLACEHOLDER']}
            onChange={this.onFNameChange}
            showError={showError}
            errorMessage={this.appConfig.FIRST_NAME_FIELD['ERROR_MSG']}
            name={this.appConfig.FIRST_NAME_FIELD['NAME']}
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
            placeholder={this.appConfig.LAST_NAME_FIELD['PLACEHOLDER']}
            name={this.appConfig.LAST_NAME_FIELD['NAME']}
          />
        </div>

        <button className='btn' onClick={this.onGreetClicked}>
          {this.appConfig.GREET_BUTTON_NAME}
        </button>
      </div>
    );
  }
}

export default App;
