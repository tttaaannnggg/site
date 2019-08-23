/*
 * @module      Portfolio
 * @author      tang
 * @date        08/18/2019
 * @description renders main page view, incl header, intro, portfolio
 *
 */
import React from 'react';
import {Header} from '../display/Header.jsx';
import {Intro} from '../display/Intro.jsx';
import {Feed} from '../containers/Feed.jsx';
import {Fortune} from '../containers/Fortune.jsx';

const Portfolio = (props)=>{
  return(
        <div>
          <Fortune />
          <Header />
          <Intro />
          <Feed />
        </div>
      )
}

export {Portfolio}