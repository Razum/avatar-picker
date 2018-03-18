import React, { PureComponent } from 'react';
import style from './App.scss';
import AvatarPicker from './components/AvatarPicker';
import avatars from './assets/avatars';

class App extends PureComponent {
  state = {
    avatars: [
      { src: avatars.avatar1, label: 'Avatar 1', id: 1 },
      { src: avatars.avatar2, label: 'Avatar 2', id: 2 },
      { src: avatars.avatar3, label: 'Avatar 3', id: 3 },
      { src: avatars.avatar4, label: 'Avatar 4', id: 4 },
      { src: avatars.avatar5, label: 'Avatar 5', id: 5 },
      { src: avatars.avatar6, label: 'Avatar 6', id: 6 },
    ],
  }

  render() {
    return (
      <div className={style.app}>
        <AvatarPicker avatars={this.state.avatars} />
      </div>
    );
  }
}


export default App;
