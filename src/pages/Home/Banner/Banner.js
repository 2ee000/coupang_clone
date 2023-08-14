import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import LogoImg from 'assets/logo.png';

const Banner = () => {
  const Blue = '#4285f4';
  
  const [BnrColor, setBnrColor] = useState(Blue);
  const Banner = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${BnrColor};
  `;

  const BannerBackground = styled.div`
  width: 1020px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  `;
  
  const BannerList = styled.div`
  width: 180px;
  height: 360px;
  background-color: #FFFFFF;
  box-shadow: 0 4px 5px rgba(0,0,0,0.3);
  z-index: 1;
  `;

  const BannerContent = styled.div`
  width: 180px;
  height: 60px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border-top: ${(props) => props.border};
  &:hover {
    border: 2px solid ${Blue};
  }
  `;

  const BannerText = styled.p`
  width: 100px;
  font-size: 12px;
  color: #000000;
  `;

  const BannerContentIcon = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${LogoImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  `;

  return(
    <Banner>
      <BannerBackground>
        <BannerList>
          <BannerContent onMouseOver={() => setBnrColor('red')} onMouseOut={() => setBnrColor(Blue)}>
            <BannerText>Galaxy Watch 6 런칭</BannerText>
            <BannerContentIcon/>
          </BannerContent>
          <BannerContent border='1px solid #eeeeee'  onMouseOver={() => setBnrColor('orange')} onMouseOut={() => setBnrColor(Blue)}>
            <BannerText>초특가<br/>UP TO 50%</BannerText>
            <BannerContentIcon/>
          </BannerContent>
          <BannerContent border='1px solid #eeeeee'  onMouseOver={() => setBnrColor('yellow')} onMouseOut={() => setBnrColor(Blue)}>
            <BannerText>오뚜기</BannerText>
            <BannerContentIcon/>
          </BannerContent>
          <BannerContent border='1px solid #eeeeee'  onMouseOver={() => setBnrColor('green')} onMouseOut={() => setBnrColor(Blue)}>
            <BannerText>로켓럭셔리</BannerText>
            <BannerContentIcon/>
          </BannerContent>
          <BannerContent border='1px solid #eeeeee'  onMouseOver={() => setBnrColor('purple')} onMouseOut={() => setBnrColor(Blue)}>
            <BannerText>인기 BEST<br/>원피스</BannerText>
            <BannerContentIcon/>
          </BannerContent>
          <BannerContent border='1px solid #eeeeee'  onMouseOver={() => setBnrColor('pink')} onMouseOut={() => setBnrColor(Blue)}>
            <BannerText>로켓배송</BannerText>
            <BannerContentIcon/>
          </BannerContent>
        </BannerList>
      </BannerBackground>
    </Banner>
  )
}

export default Banner;