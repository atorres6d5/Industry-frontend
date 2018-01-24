import React, { Component } from 'react';
import ProjectData from './projectdata'
const axios = require('axios')

const devURL = 'http://localhost:3000'

class lookUpProject extends Component {
  constructor(props){
    super(props)
    this.state={
      searchResults:[],
      searchIdInput:"",
      searchByCustomer:""
    }
    this.handleIDchange = this.handleIDchange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleIDchange(event){
    this.setState({searchIdInput: event.target.value})
  }

  handleNameChange(event){
    this.setState({searchByCustomer: event.target.value})
  }

  searchById = async (e) => {
    e.preventDefault()
    const input = parseInt(this.state.searchIdInput)
    const token = localStorage.getItem('Industry Token')

    await axios.get(`${devURL}/api/projects/${input}`, {headers: {token}}).then(result=>{
      if(!result){
        console.log(result, 'yo')
        return alert('No Project with that ID')
      }else{
        this.setState({searchResults:[result.data]})
      }
    })
  }

  searchByCustomer = async (e) => {
    e.preventDefault()
    const input = this.state.searchByCustomer
    const token = localStorage.getItem('Industry Token')

    await axios.get(`${devURL}/api/project/${input}`, {headers: {token}}).then(result=>{
      if(result.status==404){
        console.log(result, 'yo')
        return alert(result.message)
      }else{
        this.setState({searchResults:result.data})
      }
    })
  }

  render() {
    return (
      <div>
        <div className="container searchProject">
          <form className="container" onSubmit={this.searchById}>
            <div className="form-group">
                <label htmlFor="search-by-projectNO">Find Project By #</label>
                <div className="row">
                  <input type="ProjectID" className="form-control col-6 " id="projectNO" placeholder="Project #" onChange={this.handleIDchange}/>
                  <button className="btn btn-secondary" type="submit">Search</button>
                </div>
              </div>
          </form>
          <form className="container" onSubmit={this.searchByCustomer} >
            <div className="form-group">
                <label htmlFor="search-by-customer">Find Projects By Customer</label>
                <div className="row">
                  <input type="customer" className="form-control col-6 " id="customer" placeholder="Customer Name" onChange={this.handleNameChange}/>
                  <button className="btn btn-secondary" type="submit">Search</button>
                </div>
              </div>
          </form>
        </div>
        <div className="container">
          {this.state.searchResults.length>0 ? <ProjectData projects={this.state.searchResults} />: null
          }
        </div>
      </div>
    );
  }

}

export default lookUpProject;
