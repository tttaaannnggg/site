/*
 * @module      MainNav.jsx
 * @author      tang
 * @date        08/25/2019
 * @description Homepage navigation to routes
 * should take in an array of strings as route 
 * names and output LIs of links {routes: [Strings]}
 */

import React from 'react';
import { Link } from 'react-router-dom';

const mapRoutes = (item, i)=>{
  console.log(item)
  return(
    <li key={'route'+i}>
      <Link to={'/' + item}>{item}</Link>
    </li>
  )
}

const MainNav = ({routes})=>{
  const routeEls = routes.map(mapRoutes);
  return (
    <ul>{routeEls}</ul>
  )
}

export { MainNav };
