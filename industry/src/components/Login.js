import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
const axios = require('axios')
const devURL='http://localhost:3000'


class Login extends Component {

  constructor(props){
    super(props)
    this.state={
      token:localStorage.getItem('Industry Token')
    }
  }

  clickLogin = (e)=>{
    /// hit route that checks if Employee is in data base, and then save token in local storage
    e.preventDefault()
    const emp = parseInt(document.querySelector('#empID').value)
    const data = {id:emp}

    axios.post(`${devURL}/logs/clockIn`, data).then(response=>{
      localStorage.setItem('Industry Token', response.data.token)
      console.log(response.data);
      this.setState({token:response.data.token})
    })
  }

  checkToken = (token)=>{
    // let token = localStorage.getItem('Industry Token')
    axios.get(`${devURL}/logs/clockIn/token`, {headers:{token}}).then(result=>{
      console.log(result.data)
      if(result.data){
        this.props.history.push('/dashboard')
      }
    })
  }

  componentDidMount(){
    this.checkToken(this.state.token)
  }

  render() {
    return (
      <div className="login">
        <header className="row justify-content-center no-gutters">
          <div className="col-5 d-flex align-items-center justify-content-center"><h1><b>Industry</b></h1></div>
        </header>
        <br/>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="input-group mb-3">
                <input id="empID" type="text" className="form-control" placeholder="Employee ID:" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                  <button className="btn btn-secondary" type="button" onClick={this.clickLogin}>Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Login;
