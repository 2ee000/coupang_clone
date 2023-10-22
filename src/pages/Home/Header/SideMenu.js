import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import $ from 'jquery';

import { ReactComponent as LeftArrowImg } from 'assets/home/left_arrow.svg';
import { ReactComponent as RightArrowImg } from 'assets/home/right_arrow.svg';
import { ReactComponent as BlueRocketImg } from 'assets/home/rocket_blue.svg';
import { ReactComponent as GreenRocketImg } from 'assets/home/rocket_green.svg';
import { ReactComponent as PurpleRocketImg } from 'assets/home/rocket_purple.svg';
import BizImg from 'assets/home/biz.png';
import NewImg from 'assets/home/new.png';
import BoxImg from 'assets/home/box.png';
import WowImg from 'assets/home/wow.png';
import CouponImg from 'assets/home/coupon.png';
import MarketImg from 'assets/home/market.png';
import TruckImg from 'assets/home/truck.png';
import AirplaneImg from 'assets/home/airplane.png';
import BalloonImg from 'assets/home/balloon.png';
const HeaderSideMenu = () => {

  const HeaderSideMenu = styled.div`
  position: relative;
  width: 910px;
  height: 32px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  `;

  const HeaderSideMenuScroll = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0 10px;
  `;

  const HeaderSideMenuScrollLeft = styled(LeftArrowImg)`
  cursor: pointer;
  width: 25px;
  height: 25px;
  & path {
    stroke: gray;
  }
  `;

  const HeaderSideMenuScrollRight = styled(RightArrowImg)`
  cursor: pointer;
  width: 25px;
  height: 25px;
  & path {
    stroke: gray;
  }
  `;

  const HeaderSideMenuList = styled.ul`
  position: relative;
  width: 820px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  list-style-type: none;
  overflow-x: hidden;
  `;

  const HeaderSideMenuContent = styled.li`
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
  `;

  const HeaderSideMenuText = styled.p`
  margin-left: 2.5px;
  font-size: 12px;
  color: #333333;
  `;

  const onClickHeaderLeftScroll = (event) => {
    event.preventDefault();
    $("#HeaderSideMenu").animate({
        scrollLeft: "-=" + 200 + "px"
    });
  }

  const onClickHeaderRightScroll = (event) => {
    event.preventDefault();
    $("#HeaderSideMenu").animate({
      scrollLeft: "+=" + 200 + "px"
    });
  }

  const NewIcon = styled.p`
  width: 15px;
  height: 15px;
  background-image: url(${NewImg});
  background-size: contain;
  background-repeat: no-repeat;
  `;

  const BlueRocketIcon = styled(BlueRocketImg)`
  width: 20px;
  height: 20px;
  `;

  const GreenRocketIcon = styled(GreenRocketImg)`
  width: 20px;
  height: 20px;
  `;

  const PurpleRocketIcon = styled(PurpleRocketImg)`
  width: 20px;
  height: 20px;
  `;

  const BizIcon = styled(NewIcon)`
  width: 20px;
  height: 20px;
  background-image: url(${BizImg});
  `;

  const BoxIcon = styled(BizIcon)`
  background-image: url(${BoxImg});
  `;

  const WowIcon = styled(BizIcon)`
  background-image: url(${WowImg});
  `;

  const CouponIcon = styled(BizIcon)`
  background-image: url(${CouponImg});
  `;
  
  const MarketIcon = styled(BizIcon)`
  background-image: url(${MarketImg});
  `;
  
  const TruckIcon = styled(BizIcon)`
  background-image: url(${TruckImg});
  `;
  
  const AirplaneIcon = styled(BizIcon)`
  background-image: url(${AirplaneImg});
  `;

  const BalloonIcon = styled(BizIcon)`
  background-image: url(${BalloonImg});
  `;
  return(
    <HeaderSideMenu>
      <HeaderSideMenuScroll>
        <HeaderSideMenuScrollLeft id='headerScrollLeft' onClick={onClickHeaderLeftScroll}/>
        <HeaderSideMenuScrollRight id='headerScrollRight' onClick={onClickHeaderRightScroll}/>
      </HeaderSideMenuScroll>
      <HeaderSideMenuList id='HeaderSideMenu'>
        <HeaderSideMenuContent>
          <BlueRocketIcon/>
          <HeaderSideMenuText>로켓배송</HeaderSideMenuText>
        </HeaderSideMenuContent>
        <HeaderSideMenuContent>
          <GreenRocketIcon/>
          <HeaderSideMenuText>로켓프레시</HeaderSideMenuText>
        </HeaderSideMenuContent>
        <HeaderSideMenuContent>
          <BizIcon/>
          <HeaderSideMenuText>쿠팡비즈</HeaderSideMenuText>
          <NewIcon/>
        </HeaderSideMenuContent>
        <HeaderSideMenuContent>
          <PurpleRocketIcon/>
          <HeaderSideMenuText>로켓직구</HeaderSideMenuText>
        </HeaderSideMenuContent>
        <HeaderSideMenuContent>
          <BoxIcon/>
          <HeaderSideMenuText>골드박스</HeaderSideMenuText>
        </HeaderSideMenuContent>
        <HeaderSideMenuContent>
          <WowIcon/>
          <HeaderSideMenuText>와우회원할인</HeaderSideMenuText>
        </HeaderSideMenuContent>
        <HeaderSideMenuContent>
          <CouponIcon/>
          <HeaderSideMenuText>이벤트/쿠폰</HeaderSideMenuText>
        </HeaderSideMenuContent>
        <HeaderSideMenuContent>
          <TruckIcon/>
          <HeaderSideMenuText>반품마켓</HeaderSideMenuText>
        </HeaderSideMenuContent>
        <HeaderSideMenuContent>
          <MarketIcon/>
          <HeaderSideMenuText>착한상점</HeaderSideMenuText>
        </HeaderSideMenuContent>
        <HeaderSideMenuContent>
          <BalloonIcon/>
          <HeaderSideMenuText>기획전</HeaderSideMenuText>
        </HeaderSideMenuContent>
        <HeaderSideMenuContent>
          <AirplaneIcon/>
          <HeaderSideMenuText>여행/티켓</HeaderSideMenuText>
        </HeaderSideMenuContent>
      </HeaderSideMenuList>
    </HeaderSideMenu>
  )
}

export default HeaderSideMenu;