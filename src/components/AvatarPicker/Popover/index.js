import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FocusLock from 'react-focus-lock';
import style from './popover.scss';

class PopOver extends PureComponent {
  render() {
    const { isOpen, children, togglePopOver } = this.props;
    if (!isOpen) {
      return null;
    }
    return (
      <React.Fragment>
        <div className={style.bg} onClick={() => togglePopOver(false)} />
        <FocusLock autoFocus={false}>
          <div className={style.popover}>
            {children}
          </div>
        </FocusLock>
      </React.Fragment>
    );
  }
}

PopOver.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isOpen: PropTypes.bool.isRequired,
  togglePopOver: PropTypes.func.isRequired,
};

export default PopOver;
