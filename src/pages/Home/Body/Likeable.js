import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';

import GraphImg from 'assets/home/graph.png'
import { ReactComponent as LeftArrowImg } from 'assets/home/left_arrow.svg';
import { ReactComponent as RightArrowImg } from 'assets/home/right_arrow.svg';
import { ReactComponent as BlueRocketImg } from 'assets/home/rocket_blue.svg';
import { ReactComponent as PurpleRocketImg } from 'assets/home/rocket_purple.svg';
import { ReactComponent as YellowStarImg } from 'assets/home/yellow_star.svg';
import { ReactComponent as HalfStarImg } from 'assets/home/half_star.svg';
import { ReactComponent as EmptyStarImg } from 'assets/home/empty_star.svg';

const Likeable = () => {
  const Blue = '#4285f4';
  const Gray = 'rgb(185, 185, 185)';

  const Likeable = styled.div`
  width: 1020px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  gap: 20px;  
  border-bottom: 1px solid #EEEEEE;
  `;

  const LikeableText = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  align-self: flex-start;
  gap: 5px;
  `;

  const LikeableIcon = styled.p`
  width: 25px;
  height: 25px;
  background-image: url(${GraphImg});
  background-size: contain;
  background-repeat: no-repeat;
  `;

  const LikeableContentText = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
  `;

  const LikeableTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  `;

  const LikeableList = styled.ul`
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

  const onClickLikeableLeftScroll = (event) => {
    event.preventDefault();
    $("#LikeableList").animate({
        scrollLeft: "-=" + 1025 + "px"
    });
  }

  const onClickLikeableRightScroll = (event) => {
    event.preventDefault();
    $("#LikeableList").animate({
      scrollLeft: "+=" + 1025 + "px"
    });
  }

  const LikeableScroll = styled.div`
  position: absolute;
  width: 1020px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  `;

  const LikeableScrollLeft = styled.div`
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

  const LikeableScrollLeftArrow = styled(LeftArrowImg)`
  width: 15px;
  height: 15px;
  && path {
    stroke: #FFFFFF;
  }
  `;

  const LikeableScrollRight = styled(LikeableScrollLeft)`
  `;

  const LikeableScrollRightArrow = styled(RightArrowImg)`
  width: 15px;
  height: 15px;
  && path {
    stroke: #FFFFFF;
  }
  `;
  const LikeableContent = styled.li`
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
  `;

  const LikeableContentImg = styled.p`
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

  const LikeableContentTitle = styled.a`
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
    <Likeable>
      <LikeableText>
        <LikeableIcon/>
        <LikeableTitle>좋아할만한 카테고리 상품</LikeableTitle>
      </LikeableText>
      <LikeableScroll>
        <LikeableScrollLeft onClick={onClickLikeableLeftScroll}>
          <LikeableScrollLeftArrow/>
        </LikeableScrollLeft>
        <LikeableScrollRight onClick={onClickLikeableRightScroll}>
          <LikeableScrollRightArrow/>
        </LikeableScrollRight>
      </LikeableScroll>
      <LikeableList id='LikeableList'>
        <LikeableContent>
          <LikeableContentImg/>
          <LikeableContentText>
            <LikeableContentTitle>에이투 게이밍 LED 기계식 키보드</LikeableContentTitle>
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
          </LikeableContentText>
        </LikeableContent>
        <LikeableContent>
          <LikeableContentImg>
            <Sale>25%</Sale>
          </LikeableContentImg>
        </LikeableContent>
        <LikeableContent>
          <LikeableContentImg/>
        </LikeableContent>
        <LikeableContent>
          <LikeableContentImg/>
        </LikeableContent>
        <LikeableContent>
          <LikeableContentImg/>
        </LikeableContent>
        <LikeableContent>
          <LikeableContentImg/>
          <LikeableContentText>
            <LikeableContentTitle>에이투 게이밍 LED 기계식 키보드</LikeableContentTitle>
            <RoketDelivery>
              <RoketOverseasIcon/>
              <RoketOverseastext>로켓직구</RoketOverseastext>
            </RoketDelivery>
          </LikeableContentText>
        </LikeableContent>
        <LikeableContent>
          <LikeableContentImg/>
        </LikeableContent>
        <LikeableContent>
          <LikeableContentImg/>
        </LikeableContent>
        <LikeableContent>
          <LikeableContentImg/>
        </LikeableContent>
        <LikeableContent>
          <LikeableContentImg/>
        </LikeableContent>
        <LikeableContent>
          <LikeableContentImg/>
        </LikeableContent>
        <LikeableContent>
          <LikeableContentImg/>
        </LikeableContent>
      </LikeableList>
      <Advertisement>광고</Advertisement>
    </Likeable>
  )
}

export default Likeable;