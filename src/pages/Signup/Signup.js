import React, { useState } from 'react';
import styled from 'styled-components';

import LogoImg from 'assets/signup/logo.png';
import { ReactComponent as EmailImg } from 'assets/signup/email.svg'
import { ReactComponent as PasswordImg } from 'assets/signup/password.svg'
import { ReactComponent as PasswordCheckImg } from 'assets/signup/passwordcheck.svg'
import { ReactComponent as UserImg } from 'assets/signup/user.svg'
import { ReactComponent as PhoneImg } from 'assets/signup/phone.svg'

const Signup = () => {
  const Blue = '#4285f4';

  const App = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  `;

  const Header = styled.div`
  width: 460px;
  padding-top: 40px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  `;

  const Logo = styled.image`
  cursor: pointer;
  width: 195px;
  height: 45px;
  background-image: url(${LogoImg});
  background-repeat: no-repeat;
  background-size: cover;
  `;

  const Main = styled.div`
  width: 460px;
  display: flex;
  flex-flow: column nowrap;
  `;

  const Title = styled.div`
  padding: 20px 0;
  font-size: 14px;
  font-weight: bold;
  color: #111111;
  `;

  const Body = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 20px;
  gap: 14px;
  `;

  const Content = styled.label`
  width: 460px;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background-color: #FAFAFA;
  border: 1px solid #ccc;
  &:focus-within {
    border-bottom-color: ${Blue};
  }
  `;

  const ContentIcon = styled(EmailImg)`
  cursor: pointer;
  width: 45px;
  && path {
    fill: #666666;
  }
  `;

  const ContentInput = styled.input`
  width: 413px;
  height: 48px;
  padding: 16px 0 12px;
  border-left: 1px solid #ccc;
  color: #111111;
  font-family: dotum,sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-indent: 12px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgb(170, 170, 189);
  }
  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  `;

  const Terms = styled.div`
  border-top: 1px solid #f1f4f6;
  font-family: dotum, sans-serif;
  `;

  const CheckAll = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 20px 0 8px 0;
  font-family: dotum, sans-serif;
  color: #111111;
  `;

  const CheckAllCheckbox = styled.input`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  `;

  const CheckAllLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: dotum, sans-serif;
  font-size: 16px;
  font-weight: bold;
  `;

  const CheckAllMessage = styled.p`
  margin: 6px 0 0 26px;
  font-family: dotum, sans-serif;
  font-size: 12px;
  color: #555555;
  `;

  const TermsBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 16px 0;
  padding: 18px 16px;
  border: 1px solid #cccccc;
  gap: 12px;
  font-family: dotum, sans-serif;
  font-size: 12px;
  color: #111111;
  `;

  const TermCheckbox = styled(CheckAllCheckbox)`
  `;

  const TermLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: ${(props) => props.padding};
  font-family: dotum, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  `;

  const Button = styled.button`
  width: 100%;
  height: 52px;
  margin-top: 10px;
  padding: 16px 0;
  border-radius: 2px;
  background-color: #0074e9;
  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.38);
  font-family: apple sd gothic neo,malgun gothic,nanumbarungothic,nanumgothic,dotum,sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
  `;

  const CoupangBiz = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  margin: 30px 0 18px 0;
  font-size: 13px;
  font-weight: 400;
  color: #637381;
  `;

  const CoupangBizSignup = styled.a`
  cursor: pointer;
  margin-top: 6px;
  font-size: 14px;
  font-weight: bold;
  color: #454f5b;
  text-decoration: none;
  `;

  const Footer = styled.div`
  padding: 20px 0 40px 0;
  font-family: dotum, sans-serif;
  font-size: 12px;
  color: #555555;
  `;

  const GoToHome = () => {
    window.location.replace('/');
  }

  const Signup = () => {
    const [ID, setID] = useState('');
    const handleID = async(event) => {
      await setID(event.target.value);
    }
  
    const [PW, setPW] = useState('');
    const handlePW = async(event) => {
      await setPW(event.target.value);
    }
  
    const [PWcheck, setPWcheck] = useState('');
    const handlePWcheck = async(event) => {
      await setPWcheck(event.target.value);
    }
  
    const [Name, setName] = useState('');
    const handleName = async(event) => {
      await setName(event.target.value);
    }
  
    const [Phone, setPhone] = useState('');
    const handlePhone = async(event) => {
      await setPhone(event.target.value);
    }

    return(
      <Body>
        <Content>
          <ContentIcon/>
          <ContentInput type='email' value={ID} onChange={handleID} placeholder='아이디(이메일)'/>
        </Content>
        <Content>
          <ContentIcon as={PasswordImg}/>
          <ContentInput type='password' value={PW} onChange={handlePW} placeholder='비밀번호'/>
        </Content>
        <Content>
          <ContentIcon as={PasswordCheckImg}/>
          <ContentInput type='password' value={PWcheck} onChange={handlePWcheck} placeholder='비밀번호 확인'/>
        </Content>
        <Content>
          <ContentIcon as={UserImg}/>
          <ContentInput type='text' value={Name} onChange={handleName} placeholder='이름'/>
        </Content>
        <Content>
          <ContentIcon as={PhoneImg}/>
          <ContentInput type='number' value={Phone} onChange={handlePhone} placeholder='휴대폰 번호'/>
        </Content>
      </Body>
    )
  }

  return(
    <App>
      <Header>
        <Logo onClick={GoToHome}/>
      </Header>
      <Main>
        <Title>회원정보를 입력해주세요.</Title>
        <Signup/>
        <Terms>
          <CheckAll>
            <CheckAllLabel>
              <CheckAllCheckbox type='checkbox'/>모두 확인하였으며 동의합니다.
            </CheckAllLabel>
            <CheckAllMessage>전체 동의에는 필수 및 선택 정보에 대한 동의가 포함되어 있으며, 개별적으로 동의를 선택하실 수 있습니다. 선택 항목에 대한 동의를 거부하시는 경우에도 서비스 이용이 가능합니다.</CheckAllMessage>
          </CheckAll>
          <TermsBox>
            <TermLabel><TermCheckbox type='checkbox'/>[필수] 만 14세 이상입니다</TermLabel>
            <TermLabel><TermCheckbox type='checkbox'/>[필수] 쿠팡 이용약관 동의</TermLabel>
            <TermLabel><TermCheckbox type='checkbox'/>[필수] 전자금융거래 이용약관 동의</TermLabel>
            <TermLabel><TermCheckbox type='checkbox'/>[필수] 개인정보 수집 및 이용 동의</TermLabel>
            <TermLabel><TermCheckbox type='checkbox'/>[필수] 개인정보 제3자 제공 동의</TermLabel>
            <TermLabel><TermCheckbox type='checkbox'/>[선택] 마케팅 목적의 개인정보 수집 및 이용 동의</TermLabel>
            <TermLabel><TermCheckbox type='checkbox'/>[선택] 광고성 정보 수신 동의</TermLabel>
            <TermLabel padding='22px'><TermCheckbox type='checkbox'/>[선택] 이메일 수신 동의</TermLabel>
            <TermLabel padding='22px'><TermCheckbox type='checkbox'/>[선택] SMS, SNS 수신 동의</TermLabel>
            <TermLabel padding='22px'><TermCheckbox type='checkbox'/>[선택] 앱 푸시 수신 동의</TermLabel>
          </TermsBox>
        </Terms>
        <Button>동의하고 가입하기</Button>
        <CoupangBiz>
          법인 고객이신가요?<br/>
          사업자 회원으로 전용 특가 혜택을 누려보세요.<br/>
          <CoupangBizSignup>쿠팡비즈 간편가입 {'>'}</CoupangBizSignup>
        </CoupangBiz>
      </Main>
      <Footer>
        ©Coupang Corp. All rights reserved.
      </Footer>
    </App>
  )
}

export default Signup;