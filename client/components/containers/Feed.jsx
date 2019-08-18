import React, {useEffect, useState } from 'react';
import FeedItem from './FeedItem.jsx';

const fakeFetch = (hook, cb)=>{
  return setTimeout(()=>{
    hook(['a','b','c']);
    if(cb){cb();}
  }, 0);
}

const stateToFeed = (state)=>{
  return state.map((item, i)=>{
    return(<FeedItem className="feedItem" key={"feed_"+i} item={item} />)
  });
}

const Feed = (props)=>{

  const [feedState, setFeedState] = useState([]);

  useEffect(()=>{
    fakeFetch(setFeedState, ()=>{});
  });

  return(
    <div>
      {stateToFeed(feedState)}
    </div>
  )
}

export default Feed;
