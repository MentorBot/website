import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contactus'

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/About' component={About}/>
        <Route path='/Contactus' component={Contact}/>
      </Switch>
    </main>
  )
  
  export default Main
  