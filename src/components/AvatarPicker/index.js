import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import style from './avatarpicker.scss';

import Avatar from './Avatar';
import PopOver from './Popover';

class AvatarPicker extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      selected: props.avatars[0],
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
  }

  render() {
    const { avatars } = this.props;
    const { isOpen } = this.state;
    return (
      <div className={style.avatarpicker}>
        <Avatar image={this.state.selected.src} onClick={() => this.togglePopOver()} />
        <PopOver isOpen={isOpen} togglePopOver={this.togglePopOver}>
          <div className={style.header}>Choose your avatar</div>
          <ul className={style.list}>
            {avatars.map(a => (
              <li key={a.id}>
                <Avatar
                  image={a.src}
                  onClick={() => this.setState({ selected: a })}
                  className={style.decorator}
                />
              </li>
            ))}
          </ul>
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

