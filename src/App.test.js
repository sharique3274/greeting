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
  const appInitialState = wrapper.state('disabled');
  expect(appInitialState).toBe(false);
});
