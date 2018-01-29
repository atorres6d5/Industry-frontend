import React, { Component } from 'react';

class NewWorker extends Component {
  constructor(props){
    super(props)
    this.state={
      name:"",
      Employee_id:"",
      isAdmin:false,
      hashPass:""
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

    // e.taret.value="checked" ? this.setState({isAdmin:true}): this.setState({isAdmin:false})
  }

  render() {
    return (
      <div className="container newWorker">
        <form>
          <div className="form-group">
            <label>Employee ID</label>
            <input type="text" className="form-control" placeholder="Emp ID #" onChange={this.handleEmp}/>
          </div>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Emp Name" onChange={this.handleNameChange}/>
          </div>
          <div className="form-group">
            <label>Make Admin:</label>
              <select value={this.state.value} onChange={this.isAdminTrue}>
                <option value="False">No</option>
                <option value="True">Yes</option>
              </select>
          </div>
          <div className="row justify-content-center">
            <div className="col-2">
              <button type="submit" class="btn btn-success">Add User</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

}

export default NewWorker;
