import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Header from './header';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<Header {...props} />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test('render without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'header-comp');
  expect(appComponent.length).toBe(1);
});

test('header props test', () => {
  const prop = {
    firstName: 'Sharique',
    lastName: 'Rahman',
    disabled: false,
    errors: {},
  };
  const wrapper = setup(prop);
  const headerContent = findByTestAttr(wrapper, 'header-comp');
  expect(headerContent.text()).toBe('Welcome Sharique Rahman');
});

test('header props test lastname not present', () => {
  const prop = {
    firstName: 'Sharique',
    lastName: '',
    disabled: false,
    errors: {},
  };
  const wrapper = setup(prop);
  const headerContent = findByTestAttr(wrapper, 'header-comp');
  expect(headerContent.text()).toBe('Welcome Sharique ');
});
