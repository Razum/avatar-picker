import React from 'react';
import PropTypes from 'prop-types';
import style from './avatar.scss';

const Avatar = ({ image, onClick }) => (
  <button
    className={`${style.avatar}`}
    onClick={onClick}
    style={{ backgroundImage: `url(${image})` }}
  />
);

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Avatar.defaultProps = {
  onClick: () => {},
};

export default Avatar;
