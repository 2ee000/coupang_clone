import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import { ReactComponent as RightArrowImg } from 'assets/home/right_arrow.svg';

const Today = () => {
  const Blue = '#4285f4';
  const Gray = 'rgb(185, 185, 185)';

  const Today = styled.div`
  width: 1020px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  `

  const TodayText = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: flex-start;
  align-self: flex-start;
  `;

  const TodayTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  &::after {
    content: '';
    padding: 1px;
    margin: 0 5px;
    font-size: 17px;
    background-color: #000000;
  }
  `;

  const TodaySubTitle = styled.p`
  font-size: 12px;
  padding-bottom: 5px;
  `

  const TodayList = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  outline: 1px solid #d6d6d6;
  gap: 10px;
  padding: 10px;
  `;

  const TodayContent = styled.label`
  cursor: pointer;
  width: 495px;
  height: 300px;
  display: flex;
  align-items: flex-end;
  justify-content: start;
  padding: 0 0 20px 20px;
  border: 1px solid #d6d6d6;
  &&:hover {
    border: 1px solid ${Blue};
    && div {
      width: 100px;
      background-color: ${Blue};
    }
    && p {
      display: block;
    }
  }
  `;

  const TodaySmallContent = styled(TodayContent)`
  width: 242.5px;
  `

  const TodayContentButton = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Gray};
  gap: 5px;
  `;

  const TodayContentText = styled.p`
  display: none;
  font-size: 12px;
  color: #FFFFFF;  
  `;

  const TodayContentArrow = styled(RightArrowImg)`
  width: 15px;
  height: 15px;
  && path {
    stroke: #FFFFFF;
  }
  `;
  return(
    <Today>
      <TodayText>
        <TodayTitle>오늘의 발견</TodayTitle>
        <TodaySubTitle>오늘 쿠팡이 엄선한 가장 HOT한 상품!</TodaySubTitle>
      </TodayText>
      <TodayList>
        <TodayContent>
          <TodayContentButton>
            <TodayContentText>
              구매하기
            </TodayContentText>
            <TodayContentArrow/>
          </TodayContentButton>
        </TodayContent>
        <TodayContent>
          <TodayContentButton>
            <TodayContentText>
              구매하기
            </TodayContentText>
            <TodayContentArrow/>
          </TodayContentButton>
        </TodayContent>
        <TodaySmallContent>
          <TodayContentButton>
            <TodayContentText>
              구매하기
            </TodayContentText>
            <TodayContentArrow/>
          </TodayContentButton>
        </TodaySmallContent>
        <TodaySmallContent>
          <TodayContentButton>
            <TodayContentText>
              구매하기
            </TodayContentText>
            <TodayContentArrow/>
          </TodayContentButton>
        </TodaySmallContent>
        <TodaySmallContent>
          <TodayContentButton>
            <TodayContentText>
              구매하기
            </TodayContentText>
            <TodayContentArrow/>
          </TodayContentButton>
        </TodaySmallContent>
        <TodaySmallContent>
          <TodayContentButton>
            <TodayContentText>
              구매하기
            </TodayContentText>
            <TodayContentArrow/>
          </TodayContentButton>
        </TodaySmallContent>
        <TodayContent>
          <TodayContentButton>
            <TodayContentText>
              구매하기
            </TodayContentText>
            <TodayContentArrow/>
          </TodayContentButton>
        </TodayContent>
        <TodaySmallContent>
          <TodayContentButton>
            <TodayContentText>
              구매하기
            </TodayContentText>
            <TodayContentArrow/>
          </TodayContentButton>
        </TodaySmallContent>
        <TodaySmallContent>
          <TodayContentButton>
            <TodayContentText>
              구매하기
            </TodayContentText>
            <TodayContentArrow/>
          </TodayContentButton>
        </TodaySmallContent>
      </TodayList>
    </Today>
  )
}

export default Today;