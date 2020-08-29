import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('render without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test('render greet button', () => {
  const wrapper = shallow(<App />);
  const button = wrapper.find("[data-test='greet-btn']");
  expect(button.length).toBe(1);
});
