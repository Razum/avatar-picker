import React from 'react';
import { shallow, mount } from 'enzyme';
import AvatarList from './';

const avatars = [
  { src: '', label: '', id: 1 },
  { src: '', label: '', id: 2 },
  { src: '', label: '', id: 3 },
];

describe('AvatarList component', () => {
  test('should render child elements', () => {
    const wrapper = shallow(<AvatarList
      avatars={avatars}
      selectAvatar={() => {}}
      selectedAvatar={avatars[0]}
    />);
    expect(wrapper.find('li').length).toEqual(3);
  });

  test('should call selectAvatar method', () => {
    const mockCallback = jest.fn();
    const wrapper = mount(<AvatarList
      avatars={avatars}
      selectAvatar={mockCallback}
      selectedAvatar={avatars[0]}
    />);
    wrapper.find('button').at(1).simulate('click');
    expect(mockCallback).toHaveBeenCalled();
  });
});
