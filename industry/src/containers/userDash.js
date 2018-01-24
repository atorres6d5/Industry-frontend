import React, { Component } from 'react';
import Worker from '../components/Worker';
import ActionButtons from '../components/actionbuttons';
import ActiveProjects from '../components/activeproject';
const axios = require('axios')
const devURL='http://localhost:3000'

class UserDash extends Component {
  constructor(props){
    super(props)
    this.state={
      clockInTime:null,
      name:null,
      hireDate:null,
      token:localStorage.getItem('Industry Token'),
      empID:null,
      hireDate:null
    }
  }

  decodeToken(){
    const token = this.state.token
    axios.get(`${devURL}/logs/clockIn/token`, {headers:{token}}).then(result=>{
      // console.log(result.data)
      this.setState({empID:result.data.id})
      return result.data.id
    })
  }

  getWorkerData(id){
    axios.get(`${devURL}/admin/getUser/${id}`).then(result=>{
      this.setState({
        name:result.name,
        hireDate:result.created_at.slice(0,10)
      })
    })

  }

  componentDidMount(){
    this.decodeToken()
  }



  render() {

    return (
      <div className="container dashboard">
        <div className="row justify-content-between">
          <div className="col-4">
            <Worker clockTime="12:00" picture={this.props.picture} name={this.state.name} hireDate={this.state.hireDate}/>
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
            <button type="button" className="btn btn-warning">Clock Out</button>
          </div>
        </div>
      </div>
    );
  }

}

export default UserDash;
