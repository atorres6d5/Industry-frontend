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
      dueDate: new Date(),
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
      console.log(result)
      alert(`Added a new Project for ${result.data.customer}, for ${result.data.Part_count} parts of  Part Number:${result.data.Part_No}. Due on: ${moment(result.data.due_date).format("dddd, MMMM Do YYYY")}`)
    })
    .catch(
      result=>{
        alert(result.response.data.message)
      }
    )
  }

  render() {
    return (<div className="container newProject">
      <form onSubmit={this.addProject}>
        <div className="form-group">
          <label>Customer</label>
          <input type="text" className="form-control" placeholder="Customer Name" onChange={this.handleCustomer} value={this.state.customer}/>
        </div>
        <div className="form-group">
          <label>Part #</label>
          <input type="number" className="form-control" placeholder="Part Nuber" onChange={this.handlePartNumber} value={this.state.part}/>
        </div>
        <div className="form-group">
          <label>Due Date:</label>
          <input type="date" className="form-control" placeholder={this.state.due_date} onChange={this.handleDueDate}></input>
        </div>
        <div className="form-group">
          <label>Qty. Request</label>
          <input type="number" className="form-control" onChange={this.handleQty} placeholder="0000"></input>
        </div>
        <div className="row justify-content-center">
          <div className="col-2">
            <button type="submit" className="btn btn-success">Add Project
            </button>
          </div>
        </div>
      </form>
    </div>);
  }

}

export default NewProject;
