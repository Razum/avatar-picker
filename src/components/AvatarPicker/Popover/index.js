import React from 'react';
import PropTypes from 'prop-types';
import style from './popover.scss';

const PopOver = ({ children, isOpen }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={style.popover}>
      {children}
    </div>
  );
};

PopOver.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default PopOver;
