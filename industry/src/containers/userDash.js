import React, { Component } from 'react';
import Worker from '../components/Worker'
import ActionButtons from '../components/actionbuttons';

class UserDash extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="container dashboard">
        <div className="row justify-content-between">
          <div className="col-4">
            <Worker clockTime="12:00" picture={this.props.picture} name="Homer" hireDate="12/17/1989"/>
          </div>
          <div className="col-6 d-flex align-items-center">
            <ActionButtons
              lookUp="look up Project"
              logProject="Log into Project"
              claimScrap="Claim scrap part"
              endProject="log out Project"
            />
          </div>
        </div>
      </div>
    );
  }

}

export default UserDash;
