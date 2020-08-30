import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import InputBox from './input-box';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<InputBox {...props} />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test('render without error', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, 'inpt-comp');
  expect(inputComponent.length).toBe(1);
});

it('onChange input working', () => {
  const wrapper = mount(<InputBox />);
  const inputComponent = findByTestAttr(wrapper, 'inpt-comp');
  inputComponent.value = 'Sharique';
  inputComponent.simulate('change');
  expect(inputComponent.value).toEqual('Sharique');
});
