import React, { useState } from 'react';
import styled from 'styled-components';
import SortBoxButton from '../SortBox/SortBoxButton';

const CountPeople = ({ modalSort, closeModal }) => {
  const [currentCount, setCurrentCount] = useState('0');

  const countByClick = event => {
    const isElem = event.target.nodeName;
    const isEventTargetName = 'BUTTON';

    if (isElem !== isEventTargetName) return;

    const buttonSort = event.target.className.split(' ')[2];

    if (buttonSort === 'minusButton') {
      if (currentCount === '0') return;
      const minusCount = String(Number(currentCount) - 1);
      setCurrentCount(minusCount);
    } else {
      const plusCount = String(Number(currentCount) + 1);
      setCurrentCount(plusCount);
    }
  };

  const onCountChange = event => {
    const currentPeople = event.target.value;

    setCurrentCount(currentPeople);
  };

  return (
    <Container>
      <CountNumberContainer>
        <CountCategory>성인</CountCategory>
        <CountNumberInputContainer onClick={countByClick}>
          <MinusButton className="minusButton" />
          <InputNumber
            onChange={onCountChange}
            value={currentCount}
            readOnly={true}
          />
          <PersonCount>명</PersonCount>
          <PlusButton className="plusButton" />
        </CountNumberInputContainer>
      </CountNumberContainer>
      <SortBoxButton
        modalSort={modalSort}
        closeModal={closeModal}
        optionValue={{ currentCount }}
        buttonSort="dropdownButton"
      >
        적용하기
      </SortBoxButton>
    </Container>
  );
};

const Container = styled.div``;

const CountNumberContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 35px;
`;

const CountCategory = styled.div`
  margin-right: 35px;
  font-weight: 700;
`;

const CountNumberInputContainer = styled.div`
  display: flex;
  position: relative;
  padding: 0 31px;
  text-align: center;
`;

const MinusButton = styled.button`
  position: absolute;
  left: -2px;
  text-indent: -9999px;
  background: #f9fafb url(./images/btn_count.png) no-repeat 0 0;
  background-size: 36px 108px;
  width: 34px;
  height: 35px;
  display: inline-block;
  border: 1px solid #e4e4e4;
  cursor: pointer;
`;

const InputNumber = styled.input`
  display: inline-block;
  width: 65px;
  height: 35px;
  font-size: 15px;
  font-weight: 600;
  vertical-align: middle;
  text-align: center;
  border: none;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  outline: none;
`;

const PersonCount = styled.span`
  position: absolute;
  top: 2px;
  left: 75px;
  font-size: 15px;
  font-weight: 600;
  display: inline-block;
  line-height: 32px;
`;

const PlusButton = styled.button`
  position: absolute;
  right: -2px;
  text-indent: -9999px;
  background: #f9fafb url(./images/btn_count.png) no-repeat 0 -50px;
  background-size: 34px 103px;
  width: 34px;
  height: 35px;
  display: inline-block;
  border: 1px solid #e4e4e4;
  cursor: pointer;
`;

export default CountPeople;
