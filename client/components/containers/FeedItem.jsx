import React from 'react';
import FeedImg from '../display/FeedImg.jsx';
import FeedTxt from '../display/FeedTxt.jsx';


const FeedItem = (props)=>{
  return (
    <div>
      <FeedImg img={props.item.img}/>
      <FeedTxt txt={props.item.txt}/>
    </div>
  )
}

export default FeedItem;
