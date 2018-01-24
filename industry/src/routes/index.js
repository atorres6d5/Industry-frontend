import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from '../components/Login'
import UserDash from '../containers/userDash';






export default ()=>(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component = {Login}/>
      <Route path="/dashboard" exact component ={UserDash}/>
    </Switch>
  </BrowserRouter>
)
