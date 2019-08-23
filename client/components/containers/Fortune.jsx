import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { FortuneDisplay } from '../display/FortuneDisplay.jsx';

const FortuneStyle = styled.div`
  color:${(props) => props ? props.color : 'black'}
`

const Fortune = ({url})=>{

  const [fortuneObj, setFortuneObj] = useState({
    color:"black",
    txt: null
  })

  useEffect(()=>{
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch('/api/fortune', {signal})
      .then((data)=>{
        data.json();
      })
      .then((json)=>{
        console.log(json);
        setFortuneObj(json);
      })
    return ()=> abortController.abort();
  });
  return(
    <FortuneStyle color={fortuneObj.color}>
      <FortuneDisplay txt={fortuneObj.txt} />
    </FortuneStyle>
  );
};

export { Fortune };
