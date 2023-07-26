import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import LogoImg from 'assets/logo.png';
import {ReactComponent as UserImg } from 'assets/user.svg';
import {ReactComponent as CartImg } from 'assets/cart.svg';
import {ReactComponent as MicImg } from 'assets/mic.svg';
import {ReactComponent as SearchImg } from 'assets/search.svg';

const HeaderMenu = () => {
  const Blue = '#4285f4';

  const HeaderMenu = styled.div`
  width: 910px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  margin-bottom: 10px;
  gap: 20px;
  `;

  const Logo = styled.p`
  cursor: pointer;
  width: 174px;
  height: 41px;
  background-image: url(${LogoImg});
  background-size: cover;
  background-repeat: no-repeat;
  `;

  const SearchForm = styled.div`
  width: 488px;
  height: 37px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border: 2px solid ${Blue};
  `

  const SearchCategory = styled.div`
  position: relative;
  cursor: pointer;
  width: 135px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #555555;
  border-right: 1px solid #ddd;
  `;

  const SearchCategorySelect = styled.p`
  padding: 0 10px;
  font-size: 12px;
  color: #555555;  
  `;

  const [SearchCategoryValue, setSearchCategoryValue] = useState('전체');
  const [SearchCategoryArrow, setSearchCategoryArrow] = useState('▼');
  const [SearchListTransition, setSearchListTransition] = useState('hidden');
  const onClickSearchCategory = () => {
    if(SearchListTransition === 'hidden') {
      setSearchListTransition('visible');
      setSearchCategoryArrow('▲');
    } else {
      setSearchListTransition('hidden');
      setSearchCategoryArrow('▼');
    }
  }
  const SearchCategoryList = styled.ul`
  visibility: ${SearchListTransition};
  position: absolute;
  top: 35px;
  width: 135px;
  max-height: 238px;
  padding: 10px 0 10px 10px;
  border: 1px solid #ddd;
  background-color: #FFFFFF;
  z-index: 1;
  font-size: 12px;
  overflow-y: auto;
  overflow-x: hidden;
  `;

  const SearchCategoryContent = styled.li`
  width: 108px;
  height: 30px;
  list-style-type: none;
  `;

  const SearchCategoryText = styled.p`
  padding: 7px 0 7px 3px;
  font-size: 12px;
  &:hover {
    color: ${Blue};
    text-decoration: underline;
  }  
  `;

  const SearchInput = styled.input`
  width: 283px;
  height: 33px;
  font-size: 14px;
  text-indent: 10px;
  color: #333;
  &:focus {
    outline: none;
  }
  `;

  const UserMenu = styled.div`
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 7px;
  `;

  const UserMenuText = styled.p`
  font-size: 12px;
  color: #333333;
  `;

  const UserIcon = styled(UserImg)`
  width: 30px;
  height: 30px;
  `;

  const CartIcon = styled(CartImg)`
  width: 30px;
  height: 30px;
  `;

  const MicIcon = styled(MicImg)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin: 0 5px 0 10px;
  `;

  const SearchIcon = styled(SearchImg)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin: 0 10px 0 5px;
  `;

  return (
    <HeaderMenu>
      <Logo/>
      <SearchForm>
        <SearchCategory onClick={onClickSearchCategory}>
          <SearchCategorySelect>{SearchCategoryValue}</SearchCategorySelect>
          <SearchCategorySelect>{SearchCategoryArrow}</SearchCategorySelect>
          <SearchCategoryList>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('전체')}><SearchCategoryText>전체</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('여성패션')}><SearchCategoryText>여성패션</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('남성패션')}><SearchCategoryText>남성패션</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('남녀 공용 의류')}><SearchCategoryText>남녀 공용 의류</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('유아동패션')}><SearchCategoryText>유아동패션</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('뷰티')}><SearchCategoryText>뷰티</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('출산/유아동')}><SearchCategoryText>출산/유아동</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('식품')}><SearchCategoryText>식품</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('주방용품')}><SearchCategoryText>주방용품</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('생활용품')}><SearchCategoryText>생활용품</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('홈인테리어')}><SearchCategoryText>홈인테리어</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('가전디지털')}><SearchCategoryText>가전디지털</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('스포츠/레저')}><SearchCategoryText>스포츠/레저</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('전자동차용품체')}><SearchCategoryText>자동차용품</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('도서/음반/DVD')}><SearchCategoryText>도서/음반/DVD</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('완구/취미')}><SearchCategoryText>완구/취미</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('문구/오피스')}><SearchCategoryText>문구/오피스</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('반려동물용품')}><SearchCategoryText>반려동물용품</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('헬스/건강식품')}><SearchCategoryText>헬스/건강식품</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('국내여행')}><SearchCategoryText>국내여행</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('해외여행')}><SearchCategoryText>해외여행</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('로켓럭셔리')}><SearchCategoryText>로켓럭셔리</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('장마준비')}><SearchCategoryText>장마준비</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('여름시즌')}><SearchCategoryText>여름시즌</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('로켓설치')}><SearchCategoryText>로켓설치</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('공간별 집꾸미기')}><SearchCategoryText>공간별 집꾸미기</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('헬스케어 전문관')}><SearchCategoryText>헬스케어 전문관</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('쿠팡 Only')}><SearchCategoryText>쿠팡 Only</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('싱글라이프')}><SearchCategoryText>싱글라이프</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('악기전문관')}><SearchCategoryText>악기전문관</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('결혼준비')}><SearchCategoryText>결혼준비</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('아트/공예')}><SearchCategoryText>아트/공예</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('미세먼지용품')}><SearchCategoryText>미세먼지용품</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('홈카페')}><SearchCategoryText>홈카페</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('실버스토어')}><SearchCategoryText>실버스토어</SearchCategoryText></SearchCategoryContent>
            <SearchCategoryContent onClick={() => setSearchCategoryValue('로켓펫닥터')}><SearchCategoryText>로켓펫닥터</SearchCategoryText></SearchCategoryContent>
          </SearchCategoryList>
        </SearchCategory>
        <SearchInput placeholder='찾고 싶은 상품을 검색해보세요!'/>
        <MicIcon/>
        <SearchIcon/>
      </SearchForm>
      <UserMenu>
        <UserIcon/>
        <UserMenuText>마이쿠팡</UserMenuText>
      </UserMenu>
      <UserMenu>
        <CartIcon/>
        <UserMenuText>장바구니</UserMenuText>
      </UserMenu>
    </HeaderMenu>

  )
}

export default HeaderMenu;