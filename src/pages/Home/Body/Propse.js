import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';

import ShoppingBagImg from 'assets/home/shoppingbag.png';
import { ReactComponent as LeftArrowImg } from 'assets/home/left_arrow.svg';
import { ReactComponent as RightArrowImg } from 'assets/home/right_arrow.svg';
import { ReactComponent as BlueRocketImg } from 'assets/home/rocket_blue.svg';
import { ReactComponent as PurpleRocketImg } from 'assets/home/rocket_purple.svg';
import { ReactComponent as YellowStarImg } from 'assets/home/yellow_star.svg';
import { ReactComponent as HalfStarImg } from 'assets/home/half_star.svg';
import { ReactComponent as EmptyStarImg } from 'assets/home/empty_star.svg';

const Propse = () => {
  const Blue = '#4285f4';
  const Gray = 'rgb(185, 185, 185)';

  const Propse = styled.div`
  width: 1020px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  gap: 20px;
  border-bottom: 1px solid #EEEEEE;
  `;

  const PropseText = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  align-self: flex-start;
  gap: 5px;
  `;

  const PropseIcon = styled.p`
  width: 25px;
  height: 25px;
  background-image: url(${ShoppingBagImg});
  background-size: contain;
  background-repeat: no-repeat;
  `;

  const PropseTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  `;

  const PropseList = styled.ul`
  position: relative;
  width: 1020px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  list-style-type: none;
  overflow-x: hidden;
  gap: 5px;
  `;

  const onClickPropseLeftScroll = (event) => {
    event.preventDefault();
    $("#PropseList").animate({
        scrollLeft: "-=" + 1025 + "px"
    });
  }

  const onClickPropseRightScroll = (event) => {
    event.preventDefault();
    $("#PropseList").animate({
      scrollLeft: "+=" + 1025 + "px"
    });
  }

  const PropseScroll = styled.div`
  position: absolute;
  width: 1020px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  `;

  const PropseScrollLeft = styled.div`
  z-index: 99;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Gray};
  opacity: 0.5;
  &&:hover {
    opacity: 1;
  }
  `;

  const PropseScrollLeftArrow = styled(LeftArrowImg)`
  width: 15px;
  height: 15px;
  && path {
    stroke: #FFFFFF;
  }
  `;

  const PropseScrollRight = styled(PropseScrollLeft)`
  `;

  const PropseScrollRightArrow = styled(RightArrowImg)`
  width: 15px;
  height: 15px;
  && path {
    stroke: #FFFFFF;
  }
  `;
  const PropseContent = styled.li`
  cursor: pointer;
  width: 200px;
  height: 300px;
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
  &&:hover a:first-child {
    color: ${Blue};
    text-decoration: underline;
  }
  &&:hover div {
    text-decoration: none;
  }
  `;

  const PropseContentImg = styled.p`
  width: 100%;
  height: 200px;
  background-color: gray;
  `;

  const Sale = styled.p`
  width: 50px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  background-color: red;
  color: #FFFFFF;
  `;

  const PropseContentText = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
  `;

  const PropseContentTitle = styled.a`
  font-size: 14px;
  color: #111111;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  `;

  const RoketDelivery = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 3px;
  `;

  const RoketDeliveryIcon = styled(BlueRocketImg)`
  width: 15px;
  height: 15px;
  `;

  const RoketDeliveryText = styled.p`
  font-size: 14px;
  font-style: italic;
  font-weight: bolder;
  color: ${Blue};
  `;

  const RoketOverseasIcon = styled(PurpleRocketImg)`
  width: 15px;
  height: 15px;
  `;

  const RoketOverseastext = styled(RoketDeliveryText)`
  color: purple;
  `;

  const StarReview = styled.div`
  display: flex;
  flex-flow: row nowrap;
  `;

  const YellowStar = styled(YellowStarImg)`
  width: 15px;
  height: 15px;
  `;

  const HalfStar = styled(HalfStarImg)`
  width: 15px;
  height: 15px;
  `;

  const EmptyStar = styled(EmptyStarImg)`
  width: 15px;
  height: 15px;
  `;

  const StarReviewText = styled.p`
  margin-left: 5px;
  font-size: 12px;
  color: gray;
  `;

  const Advertisement = styled.p`
  font-size: 12px;
  color: #555555;
  align-self: end;
  opacity: .3;
  `;

  return(
    <Propse>
      <PropseText>
        <PropseIcon/>
        <PropseTitle>오늘의 쇼핑 제안</PropseTitle>
      </PropseText>
      <PropseScroll>
        <PropseScrollLeft onClick={onClickPropseLeftScroll}>
          <PropseScrollLeftArrow/>
        </PropseScrollLeft>
        <PropseScrollRight onClick={onClickPropseRightScroll}>
          <PropseScrollRightArrow/>
        </PropseScrollRight>
      </PropseScroll>
      <PropseList id='PropseList'>
        <PropseContent>
          <PropseContentImg/>
          <PropseContentText>
            <PropseContentTitle>에이투 게이밍 LED 기계식 키보드</PropseContentTitle>
            <RoketDelivery>
              <RoketDeliveryIcon/>
              <RoketDeliveryText>로켓배송</RoketDeliveryText>
            </RoketDelivery>
            <StarReview>
              <YellowStar/>
              <YellowStar/>
              <YellowStar/>
              <HalfStar/>
              <EmptyStar/>
              <StarReviewText>(505)</StarReviewText>
            </StarReview>
          </PropseContentText>
        </PropseContent>
        <PropseContent>
          <PropseContentImg/>
        </PropseContent>
        <PropseContent>
          <PropseContentImg/>
        </PropseContent>
        <PropseContent>
          <PropseContentImg/>
        </PropseContent>
        <PropseContent>
          <PropseContentImg>
            <Sale>41%</Sale>
          </PropseContentImg>
          <PropseContentText>
            <PropseContentTitle>에이투 게이밍 LED 기계식 키보드</PropseContentTitle>
            <RoketDelivery>
              <RoketDeliveryIcon/>
              <RoketDeliveryText>로켓배송</RoketDeliveryText>
            </RoketDelivery>
            <StarReview>
              <YellowStar/>
              <YellowStar/>
              <YellowStar/>
              <HalfStar/>
              <EmptyStar/>
              <StarReviewText>(505)</StarReviewText>
            </StarReview>
          </PropseContentText>
        </PropseContent>
        <PropseContent>
          <PropseContentImg/>
          <PropseContentText>
            <PropseContentTitle>에이투 게이밍 LED 기계식 키보드</PropseContentTitle>
            <RoketDelivery>
              <RoketOverseasIcon/>
              <RoketOverseastext>로켓직구</RoketOverseastext>
            </RoketDelivery>
          </PropseContentText>
        </PropseContent>
        <PropseContent>
          <PropseContentImg/>
        </PropseContent>
        <PropseContent>
          <PropseContentImg/>
        </PropseContent>
        <PropseContent>
          <PropseContentImg/>
        </PropseContent>
        <PropseContent>
          <PropseContentImg/>
        </PropseContent>
        <PropseContent>
          <PropseContentImg/>
        </PropseContent>
        <PropseContent>
          <PropseContentImg/>
        </PropseContent>
      </PropseList>
      <Advertisement>광고</Advertisement>
    </Propse>
  )
}

export default Propse;