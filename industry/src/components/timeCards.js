import React, { Component } from 'react';

class Timecards extends Component {
  constructor(props){
    super(props)
    this.state={
      searchResults:[],
      idSearch:"",
      dateSearch:""
    }
  }


  searchById(){

  }

  searchByDates(){

  }

  handleIDchange(){

  }

  handleDateChange(){

  }



  render() {
    return (
      <div>
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
          <form className="container" onSubmit={this.searchByDates} >
            <div className="form-group">
                <label htmlFor="search-by-customer">Search by Work Dates</label>
                <div className="row">
                  <input type="text" className="form-control col-2" placeholder="Employee Id"/>
                  <input type="date" className="form-control col-3 " placeholder="Dates" onChange={this.handleDateFromChange}/>
                  <input type="date" className="form-control col-3 " placeholder="Dates" onChange={this.handleDateToChange}/>
                  <button className="btn btn-secondary" type="submit">Search</button>
                </div>
              </div>
          </form>
        </div>
        <div className="container">
          {/*search results go here  */}


        </div>
      </div>
    );
  }

}

export default Timecards;
