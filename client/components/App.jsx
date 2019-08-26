/*
 * @module      App.jsx
 * @author      tang
 * @date        08/18/2019
 * @description React app which renders all children
 *
 */

import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Portfolio } from './pages/Portfolio.jsx';
import { FortunePage } from './pages/FortunePage.jsx';
import { MainNav } from './pages/MainNav.jsx';

const routes = ["fortune", "feed"];

const App = (props)=>{
  return(
    <Router>
      <Route path="/" exact render={(props)=>(<MainNav routes={routes} />)} />
      <Route path="/fortune/" component={FortunePage} />
      <Route path="/feed/" component={Portfolio} />
    </Router>
  )
}

export { App };
