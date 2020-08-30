import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import CheckBox from './check-box';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<CheckBox {...props} />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test('render without error', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, 'check-comp');
  expect(inputComponent.length).toBe(1);
});

it('onChange checkbox working', () => {
  const wrapper = mount(<CheckBox />);
  const inputComponent = findByTestAttr(wrapper, 'check-comp');
  inputComponent.value = true;
  inputComponent.simulate('change');
  expect(inputComponent.value).toEqual(true);
});
