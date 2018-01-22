import React, { Component } from 'react';
import Login from './components/Login';
import UserDash from './containers/userDash'

class App extends Component {

  render() {
    return (
      <div className="container-fluid no-gutters">
        <UserDash
          picture={'../../public/images/ComingSoon'}
          background={"../../public/images/drill"}
        />
      </div>
    );
  }
}

export default App;
