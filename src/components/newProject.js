import React, {Component} from 'react';
const axios = require('axios')
const devURL=process.env.REACT_APP_API_URL
const moment = require('moment')

class NewProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customer: "",
      part: 0,
      dueDate: moment().add(1,"years")._d,
      qty: 0
    }
  }

  handleCustomer = (e) => {
    this.setState({customer: e.target.value})
  }

  handlePartNumber = (e) => {
    this.setState({part: e.target.value})
  }

  handleDueDate = (e) => {
    this.setState({dueDate: e.target.value})
  }

  handleQty = (e) => {
    this.setState({qty: e.target.value})
  }

  addProject = async (e) => {
    e.preventDefault()
    axios.post(`${devURL}/admin/addProject`, {
      "customer": this.state.customer,
      "Part_No": this.state.part,
      "due_date": this.state.dueDate,
      "Part_count": this.state.qty
    }).then(result => {
      alert(`Added a new Project for ${result.data.customer}, for ${result.data.Part_count} parts of  Part Number:${result.data.Part_No}. Due on: ${moment(result.data.due_date).format("dddd, MMMM Do YYYY")}`)
      this.props.history.push('/lookUpProject')
    })
    .catch(
      result=>{
        alert(result.response.data.message)
      }
    )
  }

  render() {
    return (
      <div>
        <header className="row justify-content-center no-gutters">
          <div className="col-5 d-flex align-items-center justify-content-center">
            <h1>
              <b>Industry</b>
            </h1>
          </div>
        </header>
      <div className="container newProject">
      <form onSubmit={this.addProject}>
        <div className="form-group">
          <label>Customer</label>
          <input type="text" className="form-control" placeholder="Customer Name" onChange={this.handleCustomer} value={this.state.customer} required/>
        </div>
        <div className="form-group">
          <label>Part #</label>
          <input type="number" className="form-control" placeholder="Part Nuber" onChange={this.handlePartNumber} required/>
        </div>
        <div className="form-group">
          <label>Due Date:</label>
          <input type="date" className="form-control" placeholder={this.state.due_date} onChange={this.handleDueDate}></input>
          <small class="form-text">Default one year form Today</small>
        </div>
        <div className="form-group">
          <label>Qty. Request</label>
          <input type="number" className="form-control" onChange={this.handleQty} placeholder="0000" required></input>
        </div>
        <div className="row justify-content-between">
          <div className="col-5">
            <button type="submit" className="btn btn-success btn-block">Add Project
            </button>
          </div>
          <div className="col-5"><button type="button" className="btn btn-warning btn-block" onClick={()=>this.props.history.push("/adminDash")}>Back</button></div>
        </div>
      </form>
    </div>
  </div>
  );
  }

}

export default NewProject;
