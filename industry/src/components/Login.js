import React from 'react';
const axios = require('axios')
const devURL='localhost:3000'

const clickLogin = (e)=>{
  /// hit route that checks if Employee is in data base, and then save token in local storage
  e.preventDefault()
  const emp = document.querySelector('#empID').value
  console.log(emp);
  axios.post(`${devURL}/logs/clockIn`, {id:emp}).then(response=>{
    console.log(response);
  })
}







const Login = () => (
  <div className="login">
    <header className="row justify-content-center no-gutters">Industry</header>
    <br/>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-5">
          <div className="input-group mb-3">
            <input id="empID" type="text" className="form-control" placeholder="Employee ID:" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button" onClick={clickLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
