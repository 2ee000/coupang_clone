import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import Category from './Category';
import HeaderMenu from './Menu';
import HeaderSideMenu from './SideMenu';

const Header = () => {
  const Header = styled.div`
  width: 1020px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  `;

  const HeaderContainer = styled.div`
  height: 115px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: end;
  `;

  return(
    <Header>
      <Category/>
      <HeaderContainer>
        <HeaderMenu/>
        <HeaderSideMenu/>
      </HeaderContainer>
    </Header>
  )
}

export default Header;