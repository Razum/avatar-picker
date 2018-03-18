import React from 'react';
import { shallow, mount } from 'enzyme';
import AvatarPicker from './';

const avatars = [
  { src: '', label: '', id: 1 },
  { src: '', label: '', id: 2 },
  { src: '', label: '', id: 3 },
];

describe('AvatarPicker component', () => {

  test('should render 2 elements if opened', () => {
    const wrapper = shallow(<AvatarPicker avatars={avatars} />);
    expect(wrapper.children.length).toEqual(1);
  });

  test('togglePopOver change state.isOpen to false', () => {
    const wrapper = mount(<AvatarPicker avatars={avatars} />);
    wrapper.instance().togglePopOver(false);
    expect(wrapper.state().isOpen).toEqual(false);
  });

  test('Should return "No avatars found" if no avatars provided', () => {
    const wrapper = shallow(<AvatarPicker avatars={[]} />);
    expect(wrapper.text()).toEqual('No avatars found');
  });

  test('Should ', async () => {
    jest.useFakeTimers();
    const wrapper = shallow(<AvatarPicker avatars={avatars} />);
    wrapper.instance().togglePopOver = jest.fn();
    wrapper.instance().selectAvatar(avatars[2]);
    jest.runAllTimers();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(wrapper.state().selectedAvatar).toEqual(avatars[2]);
    expect(wrapper.instance().togglePopOver).toHaveBeenCalled();
  }, 100);
});
