import React from 'react';
import styled from 'styled-components';

import Today from './Today';
import Likeable from './Likeable';
import Propse from './Propse';

const Body = () => {
  const Body = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 50px;
  margin: 50px 0;
  `;

  return(
    <Body>
      <Today/>
      <Propse/>
      <Likeable/>
    </Body>
  )
}

export default Body;