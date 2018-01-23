import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from '../components/Login'

export default ()=>(
  <BrowserRouter>
    <Route path="/" component={Login}/>
  </BrowserRouter>
)
