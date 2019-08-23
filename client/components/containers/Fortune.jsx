import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { FortuneDisplay } from '../display/FortuneDisplay.jsx';

const FortuneStyle = styled.div`
  color:${({color}) => props.color|'black'}
`

const Fortune = ({url})=>{
  const [fortuneObj, setFortuneObj] = useState({
    color:"black",
    txt: null
  })
  useEffect(()=>{
    fetch('/api/fortune')
      .then((data)=>{
        data.json();
      })
      .then((json)=>{
        setFortuneObj(json);
      })
  });
  return(
    <FortuneStyle color={fortuneObj.color}>
      <FortuneDisplay txt={fortuneObj.txt} />
    <FortuneStyle/>
  );
};

export { Fortune };
