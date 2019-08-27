import React, {useEffect, useState} from 'react';
import {FeedItem} from './FeedItem.jsx';
import styled from 'styled-components';

const FlexStyle = styled.div`
  display: flex;
  justify-content: space-between;
`

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

export const FlexFeed = (props)=>{

  const [feedState, setFeedState] = useState([]);

  useEffect(()=>{
    fakeFetch(setFeedState, ()=>{});
  }, []);

  return(
    <FlexStyle>
      {stateToFeed(feedState)}
    </FlexStyle>
  )
}

