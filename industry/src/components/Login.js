import React from 'react';

const Login = ({}) => (
  <div className="login">
    <header className="row justify-content-center no-gutters">Industry</header>
    <br/>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-5">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Employee ID:" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
