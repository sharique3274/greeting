import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test('render without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('render greet button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'greet-btn');
  expect(button.length).toBe(1);
});

test('app initial state', () => {
  const wrapper = setup();
  const appInitialState = wrapper.state();
  expect(appInitialState).toEqual({
    disabled: false,
    errors: {},
    firstName: '',
    lastName: '',
  });
});

test('validateInput firsName empty and disabled true', () => {
  const state = {
    firstName: '',
    lastName: '',
    disabled: true,
    errors: {},
  };

  const firstName = '';
  const lastName = '';

  const wrapper = setup(null, state);
  const componentInstance = wrapper.instance();
  const result = componentInstance.validateInput(firstName, lastName);
  expect(result).toEqual({ firstName: 'Please enter first name.' });
});

test('validateInput firsName empty and lastName empty disabled false', () => {
  const state = {
    firstName: '',
    lastName: '',
    disabled: false,
    errors: {},
  };

  const firstName = '';
  const lastName = '';

  const wrapper = setup(null, state);
  const componentInstance = wrapper.instance();
  const result = componentInstance.validateInput(firstName, lastName);
  expect(result).toEqual({
    firstName: 'Please enter first name.',
    lastName: 'Please enter last name.',
  });
});

test('validateInput firsName empty and lastName empty disabled true', () => {
  const state = {
    firstName: '',
    lastName: '',
    disabled: true,
    errors: {},
  };

  const firstName = '';
  const lastName = '';

  const wrapper = setup(null, state);
  const componentInstance = wrapper.instance();
  const result = componentInstance.validateInput(firstName, lastName);
  expect(result).toEqual({
    firstName: 'Please enter first name.',
  });
});

test('validateInput firsName empty and lastName empty disabled false', () => {
  const state = {
    firstName: '',
    lastName: '',
    disabled: false,
    errors: {},
  };

  const firstName = 'Sharique';
  const lastName = '';

  const wrapper = setup(null, state);
  const componentInstance = wrapper.instance();
  const result = componentInstance.validateInput(firstName, lastName);
  expect(result).toEqual({
    lastName: 'Please enter last name.',
  });
});

test('validateInput firsName !empty and lastName !empty disabled false', () => {
  const state = {
    firstName: '',
    lastName: '',
    disabled: false,
    errors: {},
  };

  const firstName = 'Sharique';
  const lastName = 'Rahman';

  const wrapper = setup(null, state);
  const componentInstance = wrapper.instance();
  const result = componentInstance.validateInput(firstName, lastName);
  expect(result).toEqual('');
});

test('onGreetSubmit with both lastName and firstName', () => {
  const state = {
    firstName: '',
    lastName: '',
    disabled: false,
    errors: {},
  };

  const firstName = 'Sharique';
  const lastName = 'Rahman';

  const wrapper = setup(null, state);
  const componentInstance = wrapper.instance();
  componentInstance.onGreetSubmit(firstName, lastName);
  const appState = wrapper.state();
  expect(appState).toEqual({
    disabled: false,
    errors: '',
    firstName: 'Sharique',
    lastName: 'Rahman',
  });
});

test('onGreetSubmit disabled true firstName !empty lastName empty', () => {
  const state = {
    firstName: '',
    lastName: '',
    disabled: true,
    errors: {},
  };

  const firstName = 'Sharique';
  const lastName = '';

  const wrapper = setup(null, state);
  const componentInstance = wrapper.instance();
  componentInstance.onGreetSubmit(firstName, lastName);
  const appState = wrapper.state();
  expect(appState).toEqual({
    disabled: false,
    errors: '',
    firstName: 'Sharique',
    lastName: 'LNU',
  });
});

test('onGreetSubmit disabled true firstName empty lastName empty', () => {
  const state = {
    firstName: '',
    lastName: '',
    disabled: true,
    errors: {},
  };

  const firstName = '';
  const lastName = '';

  const wrapper = setup(null, state);
  const componentInstance = wrapper.instance();
  componentInstance.onGreetSubmit(firstName, lastName);
  const appState = wrapper.state();
  expect(appState).toEqual({
    disabled: true,
    errors: {
      firstName: 'Please enter first name.',
    },
    firstName: '',
    lastName: '',
  });
});

test('onGreetSubmit disabled false firstName empty lastName empty', () => {
  const state = {
    firstName: '',
    lastName: '',
    disabled: false,
    errors: {},
  };

  const firstName = '';
  const lastName = '';

  const wrapper = setup(null, state);
  const componentInstance = wrapper.instance();
  componentInstance.onGreetSubmit(firstName, lastName);
  const appState = wrapper.state();
  expect(appState).toEqual({
    disabled: false,
    errors: {
      firstName: 'Please enter first name.',
      lastName: 'Please enter last name.',
    },
    firstName: '',
    lastName: '',
  });
});

test('onGreetSubmit disabled false firstName empty lastName empty', () => {
  const state = {
    firstName: '',
    lastName: '',
    disabled: false,
    errors: {},
  };

  const firstName = '';
  const lastName = 'Rahman';

  const wrapper = setup(null, state);
  const componentInstance = wrapper.instance();
  componentInstance.onGreetSubmit(firstName, lastName);
  const appState = wrapper.state();
  expect(appState).toEqual({
    disabled: false,
    errors: {
      firstName: 'Please enter first name.',
    },
    firstName: '',
    lastName: '',
  });
});

test('onChange on firstName', () => {
  const state = {
    firstName: 'Sharique',
    lastName: 'Rahman',
    disabled: false,
    errors: {
      firstName: 'Please enter first name',
      lastName: 'Please enter last name.',
    },
  };
  const e = {
    target: { name: 'firstName' },
  };
  const wrapper = setup(null, state);
  const componentInstance = wrapper.instance();
  componentInstance.onChange(e);
  const appState = wrapper.state();
  expect(appState).toEqual({
    disabled: false,
    errors: {
      lastName: 'Please enter last name.',
    },
    firstName: 'Sharique',
    lastName: 'Rahman',
  });
});

test('onChange on lastName', () => {
  const state = {
    firstName: 'Sharique',
    lastName: 'Rahman',
    disabled: false,
    errors: {
      firstName: 'Please enter first name.',
      lastName: 'Please enter last name.',
    },
  };
  const e = {
    target: { name: 'lastName' },
  };
  const wrapper = setup(null, state);
  const componentInstance = wrapper.instance();
  componentInstance.onChange(e);
  const appState = wrapper.state();
  expect(appState).toEqual({
    disabled: false,
    errors: {
      firstName: 'Please enter first name.',
    },
    firstName: 'Sharique',
    lastName: 'Rahman',
  });
});

test('onChange on lastName when errors.firstName is empty', () => {
  const state = {
    firstName: 'Sharique',
    lastName: 'Rahman',
    disabled: false,
    errors: {
      lastName: 'Please enter last name.',
    },
  };
  const e = {
    target: { name: 'lastName' },
  };
  const wrapper = setup(null, state);
  const componentInstance = wrapper.instance();
  componentInstance.onChange(e);
  const appState = wrapper.state();
  expect(appState).toEqual({
    disabled: false,
    errors: {},
    firstName: 'Sharique',
    lastName: 'Rahman',
  });
});

test('onChange on firstName when errors.lastName is empty', () => {
  const state = {
    firstName: 'Sharique',
    lastName: 'Rahman',
    disabled: false,
    errors: {
      firstName: 'Please enter first name.',
    },
  };
  const e = {
    target: { name: 'firstName' },
  };
  const wrapper = setup(null, state);
  const componentInstance = wrapper.instance();
  componentInstance.onChange(e);
  const appState = wrapper.state();
  expect(appState).toEqual({
    disabled: false,
    errors: {},
    firstName: 'Sharique',
    lastName: 'Rahman',
  });
});

test('onCheckboxChanged disabled is true', () => {
  const state = {
    firstName: 'Sharique',
    lastName: 'Rahman',
    disabled: true,
    errors: {
      lastName: 'Please enter last name.',
    },
  };

  const wrapper = setup(null, state);
  const componentInstance = wrapper.instance();
  componentInstance.onCheckboxChanged();
  const appState = wrapper.state();
  expect(appState).toEqual({
    disabled: false,
    errors: {
      lastName: 'Please enter last name.',
    },
    firstName: 'Sharique',
    lastName: 'Rahman',
  });
});

test('onCheckboxChanged disabled is false', () => {
  const state = {
    firstName: 'Sharique',
    lastName: 'Rahman',
    disabled: false,
    errors: {
      lastName: 'Please enter last name.',
    },
  };

  const wrapper = setup(null, state);
  const componentInstance = wrapper.instance();
  componentInstance.onCheckboxChanged();
  const appState = wrapper.state();
  expect(appState).toEqual({
    disabled: true,
    errors: {
      lastName: 'Please enter last name.',
    },
    firstName: 'Sharique',
    lastName: 'Rahman',
  });
});

test('onCheckboxChanged disabled is true', () => {
  const state = {
    firstName: 'Sharique',
    lastName: 'Rahman',
    disabled: true,
    errors: {
      lastName: 'Please enter last name.',
    },
  };

  const wrapper = setup(null, state);
  const componentInstance = wrapper.instance();
  componentInstance.onCheckboxChanged();
  const appState = wrapper.state();
  expect(appState).toEqual({
    disabled: false,
    errors: {
      lastName: 'Please enter last name.',
    },
    firstName: 'Sharique',
    lastName: 'Rahman',
  });
});

test('onCheckboxChanged disabled is true', () => {
  const state = {
    firstName: 'Sharique',
    lastName: 'Rahman',
    disabled: true,
    errors: {},
  };

  const wrapper = setup(null, state);
  const componentInstance = wrapper.instance();
  componentInstance.onCheckboxChanged();
  const appState = wrapper.state();
  expect(appState).toEqual({
    disabled: false,
    errors: {},
    firstName: 'Sharique',
    lastName: 'Rahman',
  });
});

test('onCheckboxChanged disabled is false', () => {
  const state = {
    firstName: 'Sharique',
    lastName: 'Rahman',
    disabled: false,
    errors: {},
  };

  const wrapper = setup(null, state);
  const componentInstance = wrapper.instance();
  componentInstance.onCheckboxChanged();
  const appState = wrapper.state();
  expect(appState).toEqual({
    disabled: true,
    errors: {},
    firstName: 'Sharique',
    lastName: 'Rahman',
  });
});
