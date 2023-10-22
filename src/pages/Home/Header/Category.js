import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import NewImg from 'assets/home/new.png';
import { ReactComponent as CategoryImg } from 'assets/home/category.svg';
import { ReactComponent as ClothesImg} from 'assets/home/clothes.svg';
import { ReactComponent as BeautyImg} from 'assets/home/beauty.svg';
import { ReactComponent as BabyImg} from 'assets/home/face.svg';
import { ReactComponent as FoodImg} from 'assets/home/apple.svg';
import { ReactComponent as ForkKnifeImg} from 'assets/home/fork_knife.svg';
import { ReactComponent as DrawerImg} from 'assets/home/drawer.svg';
import { ReactComponent as HouseImg} from 'assets/home/house.svg';
import { ReactComponent as CameraImg} from 'assets/home/camera.svg';
import { ReactComponent as BallImg} from 'assets/home/ball.svg';
import { ReactComponent as CarImg} from 'assets/home/car.svg';
import { ReactComponent as BookImg} from 'assets/home/book.svg';
import { ReactComponent as GameImg} from 'assets/home/game.svg';
import { ReactComponent as PencilImg} from 'assets/home/pencil.svg';
import { ReactComponent as AnimalImg} from 'assets/home/animal.svg';
import { ReactComponent as FitnessImg} from 'assets/home/fitness.svg';
import { ReactComponent as AirPlaneImg} from 'assets/home/airplane.svg';
import { ReactComponent as StarImg} from 'assets/home/star.svg';

const Category = () => {
  const Blue = '#4285f4';

  const Category = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  `;

  const CategoryButton = styled.button`
  width: 110px;
  height: 115px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  background-color: ${Blue};
  `;

  const CategoryIcon = styled(CategoryImg)`
  width: 30px;
  height: 30px;
  `;

  const CategoryText = styled.p`
  font-size: 13px;
  color: #fff;
  `;

  const [CategoryListTransition, setCategoryListTransition] = useState('hidden');
  const CategoryList = styled.div`
  visibility: ${CategoryListTransition};
  position: absolute;
  top: 115px;
  min-width: 165px;
  min-height: 450px;
  display: flex;
  flex-flow: column nowrap;
  background-color: #FFFFFF;
  padding: 20px 0;
  gap: 20px;
  border: 1px solid #ddd;
  box-shadow: -1px 4px 5px rgba(0,0,0,0.3);
  z-index: 1;
  `;

  const CategoryContent = styled.label`
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
  gap: 5px;
  color: #333333;
  &:hover {
    color: ${Blue};
    & svg path{
      stroke: ${Blue};
    }
  }
  `;

  const CategoryContentText = styled.p`
  font-size: 12px;
  `;

  const NewIcon = styled.p`
  width: 15px;
  height: 15px;
  background-image: url(${NewImg});
  background-size: contain;
  background-repeat: no-repeat;
  `;

  const CategoryContentIcon = styled(ClothesImg)`
  width: 15px;
  height: 15px;
  `;

  return(
    <Category>
      <CategoryButton onMouseOver={() => setCategoryListTransition('visible')} onMouseOut={() => setCategoryListTransition('hidden')}>
        <CategoryIcon/>
        <CategoryText>카테고리</CategoryText>
      </CategoryButton>
      <CategoryList onMouseOver={() => setCategoryListTransition('visible')} onMouseOut={() => setCategoryListTransition('hidden')}>
        <CategoryContent>
          <CategoryContentIcon/>
          <CategoryContentText>패션의류/잡화</CategoryContentText>
        </CategoryContent>
        <CategoryContent>
          <CategoryContentIcon as={BeautyImg}/>
          <CategoryContentText>뷰티</CategoryContentText>
        </CategoryContent>
        <CategoryContent>
          <CategoryContentIcon as={BabyImg}/>
          <CategoryContentText>출산/유아동</CategoryContentText>
        </CategoryContent>
        <CategoryContent>
          <CategoryContentIcon as={FoodImg}/>
          <CategoryContentText>식품</CategoryContentText>
        </CategoryContent>
        <CategoryContent>
          <CategoryContentIcon as={ForkKnifeImg}/>
          <CategoryContentText>주방용품</CategoryContentText>
        </CategoryContent>
        <CategoryContent>
          <CategoryContentIcon as={DrawerImg}/>
          <CategoryContentText>생활용품</CategoryContentText>
        </CategoryContent>
        <CategoryContent>
          <CategoryContentIcon as={HouseImg}/>
          <CategoryContentText>홈인테리어</CategoryContentText>
        </CategoryContent>
        <CategoryContent>
          <CategoryContentIcon as={CameraImg}/>
          <CategoryContentText>가전디지털</CategoryContentText>
        </CategoryContent>
        <CategoryContent>
          <CategoryContentIcon as={BallImg}/>
          <CategoryContentText>스포츠/레저</CategoryContentText>
        </CategoryContent>
        <CategoryContent>
          <CategoryContentIcon as={CarImg}/>
          <CategoryContentText>자동차용품</CategoryContentText>
        </CategoryContent>
        <CategoryContent>
          <CategoryContentIcon as={BookImg}/>
          <CategoryContentText>도서/음반/DVD</CategoryContentText>
        </CategoryContent>
        <CategoryContent>
          <CategoryContentIcon as={GameImg}/>
          <CategoryContentText>완구/취미</CategoryContentText>
        </CategoryContent>
        <CategoryContent>
          <CategoryContentIcon as={PencilImg}/>
          <CategoryContentText>문구/오피스</CategoryContentText>
        </CategoryContent>
        <CategoryContent>
          <CategoryContentIcon as={AnimalImg}/>
          <CategoryContentText>반려동물용품</CategoryContentText>
        </CategoryContent>
        <CategoryContent>
          <CategoryContentIcon as={FitnessImg}/>
          <CategoryContentText>헬스/건강식품</CategoryContentText>
        </CategoryContent>
        <CategoryContent>
          <CategoryContentIcon as={AirPlaneImg}/>
          <CategoryContentText>여행/티켓</CategoryContentText>
          <NewIcon/>
        </CategoryContent>
        <CategoryContent>
          <CategoryContentIcon as={StarImg}/>
          <CategoryContentText>테마관</CategoryContentText>
          <NewIcon/>
        </CategoryContent>
      </CategoryList>
    </Category>
  )
}

export default Category;