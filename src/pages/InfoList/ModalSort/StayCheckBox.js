import React, { useState } from 'react';
import styled from 'styled-components';
import SortBoxButton from '../SortBox/SortBoxButton';

const StayCheckBox = ({ modalSort, closeModal }) => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [categories, setCategories] = useState({
    hotel: false,
    pension: false,
    hanoke: false,
  });

  const changeClickedState = event => {
    const isInput = event.target.nodeName;
    const isEventTargetName = 'INPUT';

    if (isInput !== isEventTargetName) return;

    const isCategoryChecked = event.target.checked;
    const currentCategorySort = event.target.name;
    if (isCategoryChecked) {
      if (currentCategorySort === 'all') {
        const allCheckedCategory = { hotel: true, pension: true, hanoke: true };
        setCategories(allCheckedCategory);

        setIsAllChecked(true);
      } else {
        setCategories({
          ...categories,
          [currentCategorySort]: isCategoryChecked,
        });
      }
    } else {
      if (currentCategorySort === 'all') {
        const allCheckedCategory = {
          hotel: false,
          pension: false,
          hanoke: false,
        };
        setCategories(allCheckedCategory);

        setIsAllChecked(false);
      } else setIsAllChecked(false);
      setCategories({
        ...categories,
        [currentCategorySort]: isCategoryChecked,
      });
    }
  };

  return (
    <Container>
      <StayCheckBoxForm onClick={changeClickedState}>
        <CheckBoxContainer>
          <CheckBoxSortContainer>
            <CheckBoxSort>전체</CheckBoxSort>
          </CheckBoxSortContainer>
          <CheckBox name="all" type="checkbox" />
        </CheckBoxContainer>
        <CheckBoxContainer>
          <CheckBoxSortContainer>
            <CheckBoxSort>호텔</CheckBoxSort>
          </CheckBoxSortContainer>
          <CheckBox
            name="hotel"
            type="checkbox"
            checked={isAllChecked || categories.hotel}
          />
        </CheckBoxContainer>
        <CheckBoxContainer>
          <CheckBoxSortContainer>
            <CheckBoxSort>펜션</CheckBoxSort>
          </CheckBoxSortContainer>
          <CheckBox
            name="pension"
            type="checkbox"
            checked={isAllChecked || categories.pension}
          />
        </CheckBoxContainer>
        <CheckBoxContainer>
          <CheckBoxSortContainer>
            <CheckBoxSort>한옥</CheckBoxSort>
          </CheckBoxSortContainer>
          <CheckBox
            name="hanoke"
            type="checkbox"
            checked={isAllChecked || categories.hanoke}
          />
        </CheckBoxContainer>
      </StayCheckBoxForm>
      <SortBoxButton
        modalSort={modalSort}
        closeModal={closeModal}
        optionValue={categories}
        buttonSort="dropdownButton"
      >
        적용하기
      </SortBoxButton>
    </Container>
  );
};

const Container = styled.div``;

const StayCheckBoxForm = styled.form`
  margin-top: 30px;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e6e6e6;
`;

const CheckBoxSortContainer = styled.div`
  width: 50%;
  margin-right: 20px;
  text-align: center;
`;

const CheckBoxSort = styled.span`
  font-weight: 700;
  text-align: center;
`;

const CheckBox = styled.input`
  width: 30px;
  height: 30px;
`;

export default StayCheckBox;
