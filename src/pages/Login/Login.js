import React, { useState } from 'react';
import styled from 'styled-components';

import LogoImg from 'assets/login/logo.png'
import { ReactComponent as EmailImg } from 'assets/login/email.svg'
import { ReactComponent as PasswordImg } from 'assets/login/password.svg'

const Login = () => {
  const Blue = '#4285f4';

  const App = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  `;

  const Header = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  `;

  const Logo = styled.div`
  cursor: pointer;
  width: 195px;
  height: 46px;
  margin: 26.5px 0;
  background-image: url(${LogoImg});
  background-repeat: no-repeat;
  background-size: contain;
  `;

  const Method = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row norwap;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #dfe3e8;
  `

  const Type = styled.div`
  cursor: pointer;
  width: 230px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid ${Blue};
  font-family: dotum,sans-serif;
  color: ${Blue};
  font-weight: bold;
  font-size: 16px;
  `;

  const TypeGray = styled(Type)`
  color: #454f5b;
  font-weight: normal;
  border-bottom: none;
  `;

  const Main = styled.div`
  width: 460px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin-top: 150px;
  padding: 16px 0;
  gap: 16px;
  `;
  
  const Input = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 16px;
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
  `;

  const LoginETC = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  `;

  const AutoLogin = styled.label`
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 5px;
  
  font-family: dotum, san-serif;
  font-size: 14px;
  color: #555555;
  `;

  const AutoLoginCheckbox = styled.input`
  width: 20px;
  height: 20px;
  `;

  const SearchID = styled.a`
  cursor: pointer;
  font-family: dotum, sans-serif;
  text-decoration: none;
  font-size: 14px;
  color: #0073e9;
  `;

  const LoginButton = styled.button`
  padding: 12.5px 0;
  border-radius: 4px;
  background-color: #346aff;
  font-family: apple sd gothic neo,malgun gothic,nanumbarungothic,nanumgothic,dotum,sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  `;

  const Line = styled.hr`
  border-top: 1px solid #c4cdd5;
  `;

  const SignupButton = styled(LoginButton)`
  padding: 11.5px 0;
  background-color: #ffffff;
  border: 1px solid #919eab;
  color: #454f5b;
  `;

  const CoupangBiz = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  margin-top: 30px;
  gap: 6px;

  font-size: 13px;
  font-weight: 400;
  color: #637381;
  `;

  const CoupangBizSignup = styled.a`
  cursor: pointer;
  text-decoration: none;

  font-size: 14px;
  font-weight: bold;
  color: #454f5b;
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

  const GoToSignup = () => {
    window.location.replace('/signup');
  }

  const Login = () => {
    const [ID, setID] = useState('');
    const handleID = async(event) => {
      await setID(event.target.value);
    }

    const [PW, setPW] = useState('');
    const handlePW = async(event) => {
      await setPW(event.target.value);
    }

    return(
      <Input>
        <Content>
          <ContentIcon/>
          <ContentInput type='email' value={ID} onChange={handleID} placeholder='아이디(이메일)'/>
        </Content>
        <Content>
          <ContentIcon as={PasswordImg}/>
          <ContentInput type='password' value={PW} onChange={handlePW} placeholder='비밀번호'/>
        </Content>
      </Input>
    )
  }

  return(
    <App>
      <Header>
        <Logo onClick={GoToHome}/>
        <Method>
          <Type>이메일 로그인</Type>
          <TypeGray>QR코드 로그인</TypeGray>
        </Method>
      </Header>
      <Main>
        <Login/>
        <LoginETC>
          <AutoLogin>
            <AutoLoginCheckbox type='checkbox'/>자동로그인
          </AutoLogin>
          <SearchID>아이디·비밀번호 찾기 {'>'}</SearchID>
        </LoginETC>
        <LoginButton>로그인</LoginButton>
        <Line/>
        <SignupButton onClick={GoToSignup}>회원가입</SignupButton>
        <CoupangBiz>법인 고객이신가요?<br/>사업자 회원으로 전용 특가 혜택을 누려보세요.
          <CoupangBizSignup>쿠팡비즈 간편가입 {'>'}</CoupangBizSignup>
        </CoupangBiz>
      </Main>
      <Footer>
        @Coupang Corp. All rights reserved.
      </Footer>
    </App>
  );
}

export default Login;