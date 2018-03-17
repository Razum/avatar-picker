import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import style from './avatarpicker.scss';

import Avatar from './Avatar';
import AvatarList from './AvatarList';
import PopOver from './Popover';

class AvatarPicker extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      selectedAvatar: props.avatars[0],
      isOpen: false,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', (evt) => {
      if (evt.which === 27) {
        this.togglePopOver(false);
      }
    });
  }

  togglePopOver = (isOpen) => {
    this.setState(currState => ({ ...currState, isOpen: typeof isOpen !== 'undefined' ? isOpen : !currState.isOpen }));
    this.avatar.setFocus();
  }

  selectAvatar = (avatar) => {
    this.setState({ selectedAvatar: avatar });
  }

  render() {
    const { avatars } = this.props;
    const { isOpen, selectedAvatar } = this.state;
    return (
      <div className={style.avatarpicker}>
        <Avatar
          ref={(avatar) => { this.avatar = avatar; }}
          image={this.state.selectedAvatar.src}
          onClick={() => this.togglePopOver()}
        />
        <PopOver isOpen={isOpen} togglePopOver={this.togglePopOver}>
          <div className={style.header}>Choose your avatar</div>
          <AvatarList
            avatars={avatars}
            selectedAvatar={selectedAvatar}
            selectAvatar={this.selectAvatar}
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
  })).isRequired,
};

export default AvatarPicker;

