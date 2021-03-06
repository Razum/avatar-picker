import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import style from './avatarpicker.scss';

import Avatar from './Avatar';
import AvatarList from './AvatarList';
import PopOver from './Popover';

class AvatarPicker extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedAvatar: props.avatars[0],
      loadingAvatarId: null,
      isOpen: false,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (evt) => {
    if (evt.which === 27) {
      this.togglePopOver(false);
    }
  }

  togglePopOver = (isOpen) => {
    this.setState(currState => ({ ...currState, isOpen: typeof isOpen !== 'undefined' ? isOpen : !currState.isOpen }));
    this.avatar.setFocus();
  }

  selectAvatar = (avatar) => {
    this.setState({ loadingAvatarId: avatar.id });
    setTimeout(() => {
      this.setState({ selectedAvatar: avatar, loadingAvatarId: null });
      this.togglePopOver();
    }, 1500);
  }

  render() {
    const { avatars } = this.props;
    const { isOpen, selectedAvatar, loadingAvatarId } = this.state;
    if (!avatars.length) {
      return 'No avatars found';
    }

    return (
      <div className={style.avatarpicker}>
        <Avatar
          ref={(avatar) => {
            this.avatar = avatar;
          }}
          image={this.state.selectedAvatar.src}
          onClick={() => this.togglePopOver()}
        />
        <PopOver isOpen={isOpen} togglePopOver={this.togglePopOver}>
          <div className={style.header}>Choose your avatar</div>
          <AvatarList
            avatars={avatars}
            selectedAvatar={selectedAvatar}
            selectAvatar={this.selectAvatar}
            loadingAvatarId={loadingAvatarId}
          />
        </PopOver>
      </div>
    );
  }
}

AvatarPicker.propTypes = {
  avatars: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default AvatarPicker;

