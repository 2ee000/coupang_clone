import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';

import GraphImg from 'assets/graph.png'
import { ReactComponent as LeftArrowImg } from 'assets/left_arrow.svg';
import { ReactComponent as RightArrowImg } from 'assets/right_arrow.svg';
import { ReactComponent as BlueRocketImg } from 'assets/rocket_blue.svg';
import { ReactComponent as PurpleRocketImg } from 'assets/rocket_purple.svg';
import { ReactComponent as YellowStarImg } from 'assets/yellow_star.svg';
import { ReactComponent as HalfStarImg } from 'assets/half_star.svg';
import { ReactComponent as EmptyStarImg } from 'assets/empty_star.svg';

const Likeable = () => {
  const Blue = '#4285f4';
  const Gray = 'rgb(185, 185, 185)';

  const Likeable = styled.div`
  width: 1020px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 20px;  
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
  width: 200px;
  height: 300px;
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
  &&:hover p:first-child {
    color: ${Blue};
    text-decoration: underline;
  }
  `;

  const LikeableContentImg = styled.p`
  width: 100%;
  height: 200px;
  background-color: gray;
  `;

  const LikeableContentTitle = styled.p`
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
    </Likeable>
  )
}

export default Likeable;