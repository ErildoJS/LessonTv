import React from 'react'
import {Switch, Route} from 'react-router-dom'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import Forgot from '../pages/Forgot'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn}/>
    <Route path="/register" exact component={SignUp}/>

    <Route path="/dashboard" exact component={Home}/>
    <Route path="/forgot" exact component={Forgot}/>
  </Switch>
)

export default Routes