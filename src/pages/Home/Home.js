import React from 'react';
import styled from 'styled-components';

import Top from './Top/Top';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Body from './Body/Body'
import Footer from './Footer/Footer'

const Home = () => {
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
  align-items: center;
  justify-content: center;
  `;

  return(
    <App>
      <Container>
        <Top/>
        <Header/>
        <Banner/>
        <Body/>
        <Footer/>
      </Container>
    </App>
  )
}

export default Home;