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

const App = (props)=>{
  return(
    <Router>
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/fortune/'>fortune</Link>
        </li>
      </ul>
      <Route path="/" exact component={Portfolio} />
      <Route path="/fortune/" component={FortunePage} />
    </Router>
      )
}

export { App }
