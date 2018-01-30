import React, { Component } from 'react';
import AdminActions from '../components/adminActions'
import ActiveWorkers from '../components/activeWorkers'
const axios = require('axios')
const devURL='http://localhost:3000'
const moment = require('moment')




class AdminDash extends Component {
  constructor(props){
    super(props)
    this.state={
      workers:[]
    }
  }

  logout=()=>{
    localStorage.removeItem("Admin Token")
    this.props.history.push('/login')
  }

  whosHere = async ()=>{
    axios.get(`${devURL}/admin/clocked/in`).then(response=>{
      console.log(response)
      response.data.message ? null:
      response.data.data.forEach(worker=>{
        worker.hours = moment(worker.Clock_in).toNow(true)
      })
      this.setState({workers:response.data.data})
    })
  }

  componentWillMount(){
    this.whosHere()
  }


  render() {
    console.log(this.state.workers);

    return (
      <div>
        <header className="row justify-content-center no-gutters">
          <h1><b>Industry</b></h1>
        </header>
        <div className="container adminDash">
          <div className="row justify-content-center">
            <div className="col-5">
              <div className="container">
                <div className="row">
                  <div className="col-15">
                    <img src='./images/nuclear_power_plant.jpg'/>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h3>My Mfg Co. INC</h3>
                    <p>Est. 1990</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <AdminActions history={this.props.history}/>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="row">
                <h3>Workers Clocked In</h3>
                </div>
                <div className="row">
                  {this.state.workers ? <ActiveWorkers workers={this.state.workers}/> : null }

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-4">
              <button type="button" className="btn btn-block btn-warning" onClick={this.logout}>Log Out</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default AdminDash;
