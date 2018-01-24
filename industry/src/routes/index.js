import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from '../components/Login'
import UserDash from '../containers/userDash';
import lookUpProject from '../components/lookupProject'




// class Routes extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       empID:null,
//       empName:null,
//       clockInTime:null
//     }
//   }
//
//   render() {
//     return (
//       <BrowserRouter>
//         <Switch>
//           <Route path="/" exact component = {()=>{<Login />}}/>
//           <Route path="/dashboard" exact component ={()=>{<UserDash />}}/>
//         </Switch>
//       </BrowserRouter>
//     );
//   }
//
// }

// export default Routes;
//

export default ()=>(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component = {Login} />
      <Route path="/dashboard" exact component ={UserDash} />
      <Route path="/lookUpProject" exact component={lookUpProject} />
    </Switch>
  </BrowserRouter>
)
