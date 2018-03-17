import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './avatar.scss';

const cx = classNames.bind(style);

class Avatar extends PureComponent {
  setFocus() {
    this.avatar.focus();
  }
  render() {
    const {
      image,
      onClick,
      isSelectable,
      isActive,
      isLoading,
    } = this.props;
    return (
      <button
        ref={(avatar) => { this.avatar = avatar; }}
        className={cx('avatar', { selectable: isSelectable, active: isActive, loading: isLoading })}
        onClick={onClick}
        style={{ backgroundImage: `url(${image})` }}
      />
    );
  }
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSelectable: PropTypes.bool,
  isActive: PropTypes.bool,
  isLoading: PropTypes.bool,
};

Avatar.defaultProps = {
  onClick: () => {
  },
  isSelectable: false,
  isActive: false,
  isLoading: false,
};

export default Avatar;
