import React, {Component} from 'react';
import ProjectData from './projectdata'
const axios = require('axios')

const devURL=process.env.REACT_APP_API_URL

class lookUpProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
      searchIdInput: "",
      searchByCustomer: ""
    }
    this.handleIDchange = this.handleIDchange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleIDchange(event) {
    this.setState({searchIdInput: event.target.value})
  }

  handleNameChange(event) {
    this.setState({searchByCustomer: event.target.value})
  }

  getAllProjects= async ()=>{
    await axios.get(`${devURL}/api/projects`).then(result=>{

      result.data.sort((a, b)=>{
        return new Date(a.due_date) - new Date(b.due_date)
      })
      this.setState({searchResults:result.data})
    })
  }

  searchById = async (e) => {
    e.preventDefault()
    const input = parseInt(this.state.searchIdInput)
    const token = localStorage.getItem('Industry Token')

    await axios.get(`${devURL}/api/projects/${input}`, {headers: {
        token
      }}).then(result => {
      if (!result) {
        return alert('No Project with that ID')
      } else {
        this.setState({
          searchResults: [result.data]
        })
      }
    })
  }

  searchByCustomer = async (e) => {
    e.preventDefault()
    const input = this.state.searchByCustomer
    const token = localStorage.getItem('Industry Token')

    await axios.get(`${devURL}/api/project/${input}`, {headers: {
        token
      }}).then(result => {
      if (result.status === 404) {
        return alert(result.message)
      } else {
        this.setState({searchResults: result.data})
      }
    })
  }

  componentDidMount(){
    this.getAllProjects()
  }


  render() {
    return (<div>
      <header className="row justify-content-center no-gutters">
        <div className="col-5 d-flex align-items-center justify-content-center">
          <h1>
            <b>Industry</b>
          </h1>
        </div>
      </header>
      <div className="container searchProject">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <form className="container" onSubmit={this.searchById}>
                <div className="form-group">
                  <label htmlFor="search-by-projectNO">Find Project By #</label>
                  <div className="row">
                    <input type="ProjectID" className="form-control col-6 " id="projectNO" placeholder="Project #" onChange={this.handleIDchange}/>
                    <button className="btn btn-secondary" type="submit">Search</button>
                  </div>
                </div>
              </form>
              <form className="container" onSubmit={this.searchByCustomer}>
                <div className="form-group">
                  <label htmlFor="search-by-customer">Find Projects By Customer</label>
                  <div className="row">
                    <input type="customer" className="form-control col-6 " id="customer" placeholder="Customer Name" onChange={this.handleNameChange}/>
                    <button className="btn btn-secondary" type="submit">Search</button>
                  </div>
                </div>
              </form>
              <div className="row">
                <div className="col-5"><button type="button" className="btn btn-warning btn-block" onClick={()=>this.props.history.push("/adminDash")}>Back</button></div>
              </div>

            </div>
            <div className="col-6 d-flex justify-content-center">
              <img src="./images/stock.jpg"/>
            </div>
          </div>

        </div>
      </div>
      <div className="container">
        {
          this.state.searchResults.length > 0
            ? <ProjectData projects={this.state.searchResults}/>
            : null
        }
      </div>
    </div>);
  }

}

export default lookUpProject;
