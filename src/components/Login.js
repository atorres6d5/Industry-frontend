import React, {Component} from 'react';
const axios = require('axios')
const devURL=process.env.REACT_APP_API_URL

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      empID:null,
      token: localStorage.getItem('Industry Token')
    }
  }

  clickLogin = async (e) => {
    /// hit route that checks if Employee is in data base, and then save token in local storage
    e.preventDefault()
    const emp = this.state.empID
    const data = {
      Employee_id: emp
    }
    await axios.post(`${devURL}/logs/clockIn`, data).then(response => {
      console.log(response, "login")
      localStorage.setItem('Industry Token', response.data)
      this.checkToken(response.data)
    })
  }

  handleIDLogin = (e) =>{
    this.setState({empID:e.target.value})
  }

  checkToken = (token) => {
    axios.post(`${devURL}/logs/clockIn/token`, { headers: { token }
    })
    .then(result => {
      console.log(result, 'checkToken');
      if (result.data) {
        this.props.history.push('/dashboard')
      }
    })
  }

  componentDidMount() {
    this.checkToken(this.state.token)
  }

  adminLogin = async (e) => {
    e.preventDefault()
    const userid = e.target.adminID.value
    const pass = e.target.pass.value
    await axios.post(`${devURL}/admin/login`, {
      headers: {
        userid,
        pass
      }
    }).then(responce => {
      localStorage.setItem('Admin Token', responce.data.token)
      this.props.history.push('/adminDash')
    })
  }

  render() {
    return (<div className="login">
      <header className="row justify-content-center no-gutters">
        <div className="col-5 d-flex align-items-center justify-content-center">
          <h1>
            <b>Industry</b>
          </h1>
        </div>
      </header>
      <br/>
      <form className="container" onSubmit={this.clickLogin}>
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="input-group mb-3">
              <input id="empID" type="text" className="form-control" placeholder="Employee ID:" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={this.handleIDLogin}/>
              <div className="input-group-append">
                <button className="btn btn-secondary" type="submit" >Login</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <form className="container" onSubmit={this.adminLogin}>
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="input-group mb-3">
              <input name="adminID" id="adminID" type="number" className="form-control" placeholder="Admin ID#" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <input name="pass" id="pass" type="password" className="form-control" placeholder="***********" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <div className="input-group-append">
                <button className="btn btn-secondary" type="submit">Login</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>);
  }

}

export default Login;
