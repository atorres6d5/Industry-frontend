import React, { Component } from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Login from '../components/Login'
import UserDash from '../containers/userDash';
import lookUpProject from '../components/lookupProject'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('Industry Token') && localStorage.getItem('Industry Token').length>1 ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)


class Routes extends Component {
  constructor(props){
    super(props)
    this.state = {
      empID:null,
      empName:null,
      clockInTime:null,
      token:localStorage.getItem('Industry Token')
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component = {Login} />
          <PrivateRoute path="/dashboard" exact component ={UserDash} />
          <PrivateRoute path="/lookUpProject" exact component={lookUpProject} />
        </Switch>
      </BrowserRouter>
    );
  }

}

export default Routes


// export default ()=>(
//   <BrowserRouter>
    // <Switch>
    //   { !this.state.userToken ? <Redirect push to='/signIn' /> : null }
    //   <Route path="/" exact component = {Login} />
    //   <Route path="/dashboard" exact component ={UserDash} />
    //   <Route path="/lookUpProject" exact component={lookUpProject} />
    // </Switch>
//   </BrowserRouter>
// )
