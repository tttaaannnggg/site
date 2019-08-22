import React from 'react';
import { FeedImg } from '../display/FeedImg.jsx';
import { FeedTxt } from '../display/FeedTxt.jsx';


export const FeedItem = (props)=>{
  return (
    <div>
      <FeedImg img={props.item.img}/>
      <FeedTxt txt={props.item.txt}/>
    </div>
  )
}

