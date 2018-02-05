import React, {Component} from 'react'
import TimeHistory from './TimeHistory'

const axios = require('axios')
const devURL=process.env.REACT_APP_API_URL
const moment = require('moment')

class Timecards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
      idSearch: "",
      dateSearchFrom: "",
      dateSearchTo: "",
      handleDateChangeId: ""
    }
  }

  searchById = (e) => {
    e.preventDefault()
    axios.get(`${devURL}/admin/clock/records/${this.state.idSearch}`)
    .then(result => {
      console.log(result)
      result.data.message
        ? alert(result.data.message)
        : result.data.result.forEach(timeLog => {
          timeLog.timeLogged = moment.duration(moment(timeLog.Clock_out).diff(timeLog.Clock_in))._data
          timeLog.date = moment(timeLog.Clock_in).format("dddd, MMMM Do YYYY")
          timeLog.Clock_in = moment(timeLog.Clock_in).format("h:mm:ss a")
          timeLog.Clock_out = timeLog.Clock_out
            ? moment(timeLog.Clock_out).format("h:mm:ss a")
            : "Still Clocked In"
        })
      result.data.result
        ? this.setState({searchResults: result.data.result})
        : null

      console.log(result)
    })
  }

  searchByDates = (e) => {
  e.preventDefault()
  console.log(e.target.Employee_id)

  if(!e.target.Employee_id.value){
    axios.post(`${devURL}/admin/clock/timeperiod/all${this.state.handleDateChangeId}`, {
      from: this.state.dateSearchFrom,
      to: this.state.dateSearchTo
    })
    .then(result => {
      if(!result.data)alert("that didnt work for some reason")
      result.data.forEach(timeLog => {
        timeLog.timeLogged = moment.duration(moment(timeLog.Clock_out).diff(timeLog.Clock_in))._data
        timeLog.date = moment(timeLog.Clock_in).format("dddd, MMMM Do YYYY")
        timeLog.Clock_in = moment(timeLog.Clock_in).format("h:mm:ss a")
        timeLog.Clock_out = timeLog.Clock_out
          ? moment(timeLog.Clock_out).format("h:mm:ss a")
          : "Still Clocked In"
      })

      result.data.sort((a, b)=>{return a.Employee_id-b.Employee_id})
      console.log(result.data, "here it is")
      this.setState({searchResults:result.data})
      })
    }
    else{
      axios.post(`${devURL}/admin/clock/timeperiod/one/${this.state.handleDateChangeId}`, {
     from: this.state.dateSearchFrom,
     to: this.state.dateSearchTo
   }).then(result => {
     console.log(result)
     result.data.result.forEach(timeLog => {
       timeLog.timeLogged = moment.duration(moment(timeLog.Clock_out).diff(timeLog.Clock_in))._data
       timeLog.date = moment(timeLog.Clock_in).format("dddd, MMMM Do YYYY")
       timeLog.Clock_in = moment(timeLog.Clock_in).format("h:mm:ss a")
       timeLog.Clock_out = timeLog.Clock_out
         ? moment(timeLog.Clock_out).format("h:mm:ss a")
         : "Still Clocked In"

     })
     console.log(result.data.result)
     result.data.result.length > 0
       ? this.setState({searchResults: result.data.result})
       : alert("No Data From Date Range")
   })
    }
  }

  handleIDchange = (e) => {
    this.setState({idSearch: e.target.value})
  }

  handleDateChangeFrom = (e) => {
    this.setState({dateSearchFrom: e.target.value})
  }

  handleDateChangeTo = (e) => {
    this.setState({dateSearchTo: e.target.value})
  }

  handleDateChangeId = (e) => {
    this.setState({handleDateChangeId: e.target.value})
  }

  render() {
    return (<div>
      <div className="container searchProject">
        <form className="container" onSubmit={this.searchById}>
          <div className="form-group">
            <label htmlFor="search-by-projectNO">Search by Employee ID#</label>
            <div className="row">
              <input type="ProjectID" className="form-control col-6 " id="projectNO" placeholder="Employee ID#" onChange={this.handleIDchange}/>
              <button className="btn btn-secondary" type="submit">Search</button>
            </div>
          </div>
        </form>
        <form className="container" onSubmit={this.searchByDates}>
          <div className="form-group">
            <label htmlFor="search-by-customer">Search by Work Dates</label>
            <div className="row">
              <input type="text" name="Employee_id" className="form-control col-2" placeholder="Employee Id" onChange={this.handleDateChangeId}/>
              <input type="date" className="form-control col-3 " placeholder="Dates" onChange={this.handleDateChangeFrom}/>
              <input type="date" className="form-control col-3 " placeholder="Dates" onChange={this.handleDateChangeTo}/>
              <button className="btn btn-secondary" type="submit">Search</button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {
          this.state.searchResults.length > 0
            ? <TimeHistory data={this.state.searchResults}/>
            : <div className="container">
              <div className="alert alert-dark" role="alert">
                  Search Time Cards by dates and/or Employee
                </div>
            </div>

        }
      </div>
    </div>);
  }

}

export default Timecards;
