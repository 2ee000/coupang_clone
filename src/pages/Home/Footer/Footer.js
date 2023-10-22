import React from 'react';
import styled from 'styled-components';

import LogoImg from 'assets/home/logo.png';
import FacebookImg from 'assets/home/facebook.png';
import NaverBlogImg from 'assets/home/naverblog.png';
import InstagramImg from 'assets/home/instagram.png';

const Footer = () => {
  const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  border-top: 2px solid #dddddd;
  `;

  const FooterMenu = styled.div`
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #dddddd;
  `;

  const FooterMenuContent = styled.a`
  height: 12px;
  padding: 0 14px;
  border-left: 1px solid #888888;
  border: ${(props) => props.border};
  
  font-size: 12px;
  font-weight: ${(props) => props.font_weight};
  color: #555555;
  `;

  const About = styled.div`
  width: 1020px;
  height: 100px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-self: center;
  margin: 30px 0;
  `;

  const Logo = styled.p`
  cursor: pointer;
  width: 117px;
  height: 34px;
  background-image: url(${LogoImg});
  background-size: contain;
  background-repeat: no-repeat;
  `;

  const Address = styled.p`
  width: 260px;
  font-size: 11px;
  color: #555555;
  `;

  const Licensee = styled.a`
  cursor: pointer;
  font-size: 11px;
  color: #555555;
  text-decoration: underline;
  `;

  const CallCenter = styled(Licensee)`
  text-decoration: none;
  `;

  const Strong = styled(CallCenter)`
  font-weight: bolder;
  `;

  const CallNumber = styled.em`
  font-size: 24px;
  font-family: Tahoma;
  font-style: normal;
  font-weight: bold;
  color: #555555;
  `;

  const Email = styled.span`
  font-size: 11px;
  color: #555555;
  `;

  const SafeService = styled.p`
  width: 270px;
  font-size: 11px;
  color: #555555;
  `;

  const Copyright = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background-color: #333333;
  `;

  const Info = styled.p`
  width: 1020px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 10px 5px;
  font-size: 11px;
  color: #888888;
  `;
  
  const Sns = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 12px;
  `;

  const SnsIcon = styled.a`
  width: 34px;
  height: 34px;
  border-radius: 25%;
  background-color: #ffffff;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  `;

  const GoToHome = () => {
    window.location.replace('/');
  }

  return(
    <Footer>
      <FooterMenu>
        <FooterMenuContent border='none'>회사소개</FooterMenuContent>
        <FooterMenuContent>Investor Relations</FooterMenuContent>
        <FooterMenuContent>인재채용</FooterMenuContent>
        <FooterMenuContent>입점 / 제휴문의</FooterMenuContent>
        <FooterMenuContent>공지사항</FooterMenuContent>
        <FooterMenuContent>고객의 소리</FooterMenuContent>
        <FooterMenuContent>이용약관</FooterMenuContent>
        <FooterMenuContent font_weight='bolder'>개인정보 처리방침</FooterMenuContent>
        <FooterMenuContent>쿠팡페이 이용약관</FooterMenuContent>
        <FooterMenuContent font_weight='bolder'>쿠팡페이 개인정보처리방침</FooterMenuContent>
        <FooterMenuContent>신뢰관리센터</FooterMenuContent>
        <FooterMenuContent>제휴마케팅</FooterMenuContent>
        <FooterMenuContent>광고안내</FooterMenuContent>
      </FooterMenu>
      <About>
        <Logo onClick={GoToHome}/>
        <Address>
          상호명 및 호스팅 서비스 제공 : 쿠팡(주)<br/>
          대표이사 : 강한승, 박대준<br/>
          서울시 송파구 송파대로 570<br/>
          사업자 등록번호 : 120-88-0076<br/>
          통신판매업신고 : 2017-서울송파-0680<br/>
          <Licensee>사업자정보 확인 {'>'}</Licensee>
        </Address>
        <CallCenter>
          <Strong>365고객센터</Strong> | 전자금융거래분쟁처리담당<br/>
          <CallNumber>1577-7011 (유료)<br/></CallNumber>
          서울시 송파구 송파대로 570<br/>
          <Email>email: help@coupang.com</Email>
        </CallCenter>
        <SafeService>
          <Strong>우리은행 채무지급보증 안내<br/></Strong>
          당사는 고객님이 현금 결제한 금액에 대해<br/>
          우리은행과 채무지급보증 계약을 체결하여<br/>
          안전거래를 보장하고 있습니다.<br/>
          <Licensee>서비스 가입사실 확인 {'>'}</Licensee>
        </SafeService>
      </About>
      <Copyright>
        <Info>
          사이버몰 내 판매되는 상품 중에는 쿠팡에 등록한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.<br/>
          마켓플레이스(오픈마켓) 상품의 경우 쿠팡은 통신판매중개자이며 통신판매의 당사자가 아닙니다.<br/>
          쿠팡은 마켓플레이스(오픈마켓) 상품, 거래정보 및 거래 등에 대하여 책임을 지지 않습니다.<br/>
          쿠팡은 소비자 보호와 안전거래를 위해 신뢰관리센터(CM112@coupang.com)를 운영하고 있으며, 관련 분쟁이 발생할 경우 별도의 분쟁 처리절차에 의거 분쟁이 처리됩니다.<br/>
          Copyright © Coupang Corp. 2010-2022 All Rights Reserved.
          <Sns>
            <SnsIcon background={FacebookImg}/>
            <SnsIcon background={NaverBlogImg}/>
            <SnsIcon background={InstagramImg}/>
          </Sns>
        </Info>
      </Copyright>
    </Footer>
  )
}

export default Footer;