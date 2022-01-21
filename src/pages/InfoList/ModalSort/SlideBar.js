import React, { useState } from 'react';
import styled from 'styled-components';
import SortBoxButton from '../SortBox/SortBoxButton';

const SlideBar = ({ modalSort, closeModal }) => {
  const [priceMin, setPriceMin] = useState('0');
  const [priceMax, setPriceMax] = useState('100');
  const [isPrice, setIsPrice] = useState('최소가격');
  const [tmpPrice, setTmpPrice] = useState('0');
  const [visibleButton, setVisibleButton] = useState(false);

  const onConfirmPrice = event => {
    if (isPrice === '최소가격') {
      setIsPrice('최대가격');
      setPriceMin(tmpPrice);
    } else {
      setVisibleButton(true);
      setPriceMax(tmpPrice);
    }
  };

  const onPriceChange = event => {
    const currentPrice = event.target.value;
    setTmpPrice(currentPrice);
  };

  return (
    <Container>
      <Slider
        onChange={onPriceChange}
        type="range"
        min="0"
        max="100"
        defaultValue={priceMin}
        readOnly={true}
      />
      <ConfirmInputRangeContainer>
        <ShowCurrentValue
          readOnly={true}
          value={
            isPrice === '최소가격'
              ? `${tmpPrice}만원 ~ ${priceMax}만원`
              : `${priceMin}만원 ~ ${tmpPrice}만원`
          }
        />
        {!visibleButton && (
          <ResetInputRangeButton
            onClick={onConfirmPrice}
          >{`${isPrice} 설정`}</ResetInputRangeButton>
        )}
      </ConfirmInputRangeContainer>
      {visibleButton && (
        <SortBoxButton
          modalSort={modalSort}
          closeModal={closeModal}
          optionValue={{ priceMin, priceMax }}
          buttonSort="dropdownButton"
        >
          적용하기
        </SortBoxButton>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Slider = styled.input`
  -webkit-appearance: none;
  width: 250px;
  height: 5px;
  border-radius: 5px;
  background: #eee;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    background-image: url('https://media.vlpt.us/images/yeonbee/post/7458e948-1295-4a32-adaa-27a8e52b4673/slider_thumb.png');
    cursor: pointer;
  }
`;

const ConfirmInputRangeContainer = styled.div`
  margin-top: 15px;
  text-align: center;
`;

const ShowCurrentValue = styled.input`
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  margin-bottom: 12px;
  text-align: center;
  caret-color: transparent;
  &:focus {
    outline: none;
  }
`;

const ResetInputRangeButton = styled.button`
  display: block;
  margin: 0 auto;
  background-color: #e9ecef;
  font-size: 14px;
  color: #615b5b;
  text-align: center;
  line-height: 36px;
  border: 1px solid #f1f3f5;
  border-radius: 100px;
  letter-spacing: 2.5px;
  padding: 0 45px 0 45px;
  cursor: pointer;
`;

export default SlideBar;
