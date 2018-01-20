import React, { Component } from 'react';
import Worker from '../components/Worker'

class UserDash extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="container dashboard">
        <Worker clockTime="7:00 AM" picture={this.props.picture}/>
      </div>
    );
  }

}

export default UserDash;
