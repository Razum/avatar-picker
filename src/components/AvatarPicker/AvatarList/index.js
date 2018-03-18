import React from 'react';
import PropTypes from 'prop-types';
import style from './avatarlist.scss';

import Avatar from '../Avatar';

const AvatarList = ({
  avatars,
  selectAvatar,
  selectedAvatar,
  loadingAvatarId,
}) => (
  <ul className={style.list}>
    {avatars.map(avatar => (
      <li key={avatar.id}>
        <Avatar
          image={avatar.src}
          onClick={() => selectAvatar(avatar)}
          isSelectable
          isActive={selectedAvatar === avatar}
          isLoading={loadingAvatarId === avatar.id}
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
  loadingAvatarId: PropTypes.number,
};

AvatarList.defaultProps = {
  loadingAvatarId: null,
};

export default AvatarList;
