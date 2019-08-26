import React, {useEffect, useState} from 'react';
import {FeedItem} from './FeedItem.jsx';

const u = "https://ayumilovemaple.files.wordpress.com/2008/11/thief-preview.png?w=595"

const fakeFetch = (hook, cb)=>{
  return setTimeout(()=>{
    hook([{txt:"hi", img:u},{txt:"hey", img:u},{txt:"hello", img:u}]);
    if(cb){cb();}
  }, 0);
}

const stateToFeed = (state)=>{
  return state.map((item, i)=>{
    return(<FeedItem className="feedItem" key={"feed_"+i} item={item} />)
  });
}

export const Feed = (props)=>{

  const [feedState, setFeedState] = useState([]);

  useEffect(()=>{
    fakeFetch(setFeedState, ()=>{});
  }, []);

  return(
    <div>
      {stateToFeed(feedState)}
    </div>
  )
}

