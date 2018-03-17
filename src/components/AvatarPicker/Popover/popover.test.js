import React from 'react';
import { shallow } from 'enzyme';
import PopOver from './';

describe('Avatar component', () => {
  test('should render 2 elements if opened', () => {
    const wrapper = shallow(<PopOver isOpen togglePopOver={() => {}}>{[]}</PopOver>);
    expect(wrapper.children.length).toEqual(1);
  });

  test('should return null if closed', () => {
    const wrapper = shallow(<PopOver isOpen={false} togglePopOver={() => {}}>{[]}</PopOver>);
    expect(wrapper.html()).toBeNull();
  });

  test('togglePopOver should be called on back overlay click', () => {
    const mockCallback = jest.fn();
    const wrapper = shallow(<PopOver isOpen togglePopOver={mockCallback}>{[]}</PopOver>);
    wrapper.find('div').at(0).simulate('click');
    expect(mockCallback).toHaveBeenCalled();
  });
});
