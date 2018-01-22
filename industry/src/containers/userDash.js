import React, { Component } from 'react';
import Worker from '../components/Worker';
import ActionButtons from '../components/actionbuttons';
import ActiveProjects from '../components/activeproject';

class UserDash extends Component {
  constructor(props){
    super(props)
  }

  changeBackground=()=>{
    document.body.style.backgroundImage=this.props.background

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
        <br/>
        <div className="row justify-content-center">
          <div className="col-10">
            <ActiveProjects
              projects={[{
                id: 1,
                customer: 'ACME',
                due_date: '1/11/2019',
                Part_count: 28,
                Parts_made:0
              }]}
            />
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-4">
            <button type="button" class="btn btn-warning">Clock Out</button>
          </div>
        </div>
      </div>
    );
  }

}

export default UserDash;
