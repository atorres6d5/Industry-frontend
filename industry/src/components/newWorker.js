import React, { Component } from 'react';




const devURL = 'http://localhost:3000'
const axios = require('axios')





class NewWorker extends Component {
  constructor(props){
    super(props)
    this.state={
      name:"",
      Employee_id:"",
      isAdmin:false,
      hashPass:null
    }
  }

  handleNameChange = (e) => {
    this.setState({name:e.target.value})
  }

  handleEmp = (e) => {
    this.setState({Employee_id:e.target.value})
  }

  isAdminTrue = (e) => {
    console.log(e.target.value)
    e.target.value=="True" ? this.setState({isAdmin:true}):this.setState({isAdmin:false})
  }

  addNewUser = (e) => {
    e.preventDefault()
    axios.post(`${devURL}/admin/newUser`, {
      user:{
        name:this.state.name,
        Employee_id:this.state.Employee_id,
        isAdmin:this.state.isAdmin,
        hashPass: this.state.hashPass
      }
    }).then(result=>{
      console.log(result)
      this.setState({
            name:"",
            Employee_id:"",
            isAdmin:false,
            hashPass:null})
      alert(`Added ${result.data.name}`)
    })
  }

  render() {
    return (
      <div className="container newWorker">
        <form onSubmit={this.addNewUser}>
          <div className="form-group">
            <label>Employee ID</label>
            <input type="number" className="form-control" placeholder="Emp ID #" onChange={this.handleEmp} value={this.state.Employee_id}/>
          </div>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Emp Name" onChange={this.handleNameChange} value={this.state.name}/>
          </div>
          <div className="form-group">
            <label>Make Admin:</label>
              <select value={this.state.isAdmin} onChange={this.isAdminTrue}>
                <option value="False">No</option>
                <option value="True">Yes</option>
              </select>
          </div>
          <div className="row justify-content-center">
            <div className="col-2">
              <button type="submit" className="btn btn-success">Add User</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

}

export default NewWorker;
