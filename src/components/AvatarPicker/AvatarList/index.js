import React from 'react';
import PropTypes from 'prop-types';
import style from './avatarlist.scss';

import Avatar from '../Avatar';

const AvatarList = ({ avatars, selectAvatar, selectedAvatar }) => (
  <ul className={style.list}>
    {avatars.map(avatar => (
      <li key={avatar.id}>
        <Avatar
          image={avatar.src}
          onClick={() => selectAvatar(avatar)}
          isSelectable
          isActive={selectedAvatar === avatar}
        />
      </li>
    ))}
  </ul>
);

const AvatarShape = {
  src: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

AvatarList.propTypes = {
  avatars: PropTypes.arrayOf(PropTypes.shape(AvatarShape)).isRequired,
  selectAvatar: PropTypes.func.isRequired,
  selectedAvatar: PropTypes.shape(AvatarShape).isRequired,
};

export default AvatarList;
