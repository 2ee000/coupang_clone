import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Top = () => {
  const Blue = '#4285f4';

  const Top = styled.div`
  width: 100%;
  height: 34px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  `;

  const TopWrapper = styled.div`
  width: 980px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  `;

  const TopContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow row nowrap;
  gap: 12px;
  `;

  const TopText = styled.p`
  cursor: pointer;
  padding: 10px 0;
  font-size: 11px;
  color: #333333;
  `;

  const [TopListTransition, setTopListTransition] = useState('hidden');
  const TopList = styled.div`
  visibility: ${TopListTransition};
  position: absolute;
  top: 34px;
  right: -34px;
  display: flex;
  flex-flow: column nowrap;
  padding: 20px;
  gap: 12px;
  background-color: #FFFFFF;
  border: 1px solid #DDDDDD;
  z-index: 1;
  `;

  const TopListText = styled(TopText)`
  padding: 0;
  cursor: pointer;
  &:hover {
    color: ${Blue};
    text-decoration: underline;
  }
  `;

  return(
    <Top>
      <TopWrapper>
        <TopContainer>
          <TopText>즐겨찾기</TopText>
          <TopText onMouseOver={() => setTopListTransition('visible')} onMouseOut={() => setTopListTransition('hidden')}>입점신청 ▼
            <TopList  onMouseOver={() => setTopListTransition('visible')} onMouseOut={() => setTopListTransition('hidden')}>
              <TopListText>오픈마켓</TopListText>
              <TopListText>여행·티켓</TopListText>
              <TopListText>로켓배송</TopListText>
              <TopListText>제휴마켓팅</TopListText>
            </TopList>
          </TopText>
        </TopContainer>
        <TopContainer>
          <TopText>로그인</TopText>
          <TopText>회원가입</TopText>
          <TopText>고객센터</TopText>
        </TopContainer>
      </TopWrapper>
    </Top>
  )
}

export default Top;