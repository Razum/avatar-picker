import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './';

describe('Avatar component', () => {
  test('Avatar rendered', () => {
    const wrapper = shallow(<Avatar image="" />);
    expect(wrapper.children.length).toEqual(1);
  });
});
