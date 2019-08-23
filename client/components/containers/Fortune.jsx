import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { FortuneDisplay } from '../display/FortuneDisplay.jsx';

const FortuneStyle = styled.div`
  color:${(props) => !!props.color ? props.color : 'white'}
`
const Fortune = (props)=>{

  const [fortuneObj, setFortuneObj] = useState({
    color:"black",
    txt: null
  })

  useEffect(()=>{
    fetch('/api/fortune', /*{signal}*/)
      .then((data)=>{
        return data.json();
      })
      .then((json)=>{
        console.log(json);
        setFortuneObj(json);
      })
  }, []);
  return(
    <FortuneStyle color={fortuneObj.color}>
      <FortuneDisplay txt={fortuneObj.txt} />
    </FortuneStyle>
  );
};

export { Fortune };
