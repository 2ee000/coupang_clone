import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import $ from 'jquery';

import Top from './Top';
import Header from './Header/Header';

const Home = () => {
  const Blue = '#4285f4';

  const App = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  `;

  const Container = styled.div`
  min-width: 1020px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  `;

  return(
    <App>
      <Container>
        <Top/>
        <Header/>
      </Container>
    </App>
  )
}

export default Home;