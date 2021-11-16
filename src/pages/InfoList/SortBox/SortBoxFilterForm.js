import React, { useState } from 'react';
import styled from 'styled-components';
import SortBoxButton from './SortBoxButton';
import ModalTemplate from './ModalTemplate';

const SortBoxFilterForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const [curSearchValue, setCurSearchValue] = useState('');
  const [prevSearchValue, setPrevSearchValue] = useState('');

  const storeSearchValue = event => {
    const compressNewValue = event.target.value.replace(' ', '');
    const compressprevSearchValue = curSearchValue.replace(' ', '');

    setPrevSearchValue(compressprevSearchValue);
    setCurSearchValue(compressNewValue);
  };

  const removeVisible = () => {
    setIsVisible(!isVisible);
  };

  const showModal = event => {
    const isDropdownButton = event.target.nodeName;
    const isEventTargetName = 'BUTTON';
    if (isDropdownButton !== isEventTargetName) return;

    const modalSort = event.target.dataset.modal;
    const modalTitle = event.target.innerHTML;
    const { top, left } = event.target.getBoundingClientRect();

    setIsVisible(true);
    setModalInfo({ modalSort, modalTitle, top, left });
  };

  return (
    <>
      <FilterRow onClick={showModal}>
        <SortTitle>여행지/숙소</SortTitle>
        <SearchInput onMouseLeave={storeSearchValue} />
        <CountryButtonContainer>
          <DropdownButton>국내전체</DropdownButton>
        </CountryButtonContainer>
        <Checkinout>
          <SortTitle>체크인 / 체크아웃</SortTitle>
          <DropdownButton data-modal="date">체크인 / 체크아웃</DropdownButton>
        </Checkinout>
      </FilterRow>
      <FilterRow onClick={showModal}>
        <DropdownButton data-modal="people">인원</DropdownButton>
        <DropdownButton data-modal="price">가격 범위</DropdownButton>
        <DropdownButton data-modal="stay">스테이 유형</DropdownButton>
      </FilterRow>
      <SearchButtonContainer>
        <SortBoxButton
          prevSearchValue={prevSearchValue}
          curSearchValue={curSearchValue}
        >
          SEARCH
        </SortBoxButton>
      </SearchButtonContainer>
      {isVisible && (
        <ModalTemplate modal={modalInfo} closeModal={() => removeVisible()} />
      )}
    </>
  );
};

const FilterRow = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  height: 60px;
  position: relative;
`;

const SortTitle = styled.span`
  font-size: 17px;
  color: ${({ theme }) => theme.fontColor};
  font-weight: 700;
  margin-right: 10px;
  line-height: 36px;
`;

const SearchInput = styled.input`
  border: 1px solid #e4e4e4;
  width: 200px;
  height: 40px;
  border-radius: 5px;
  font-size: 15px;
  color: ${({ theme }) => theme.fontColor};
  font-weight: 500;
  padding: 0 10px;
  &:focus {
    outline: none;
  }
`;

const SortTitleCheckout = styled(SortTitle)`
  margin-left: 30px;
`;

const CountryButtonContainer = styled.div`
  margin-left: 20px;
`;

const DropdownButton = styled.button`
  cursor: pointer;
  border: 1px solid #e4e4e4;
  background: #fff url(./images/dropdownImg.png) no-repeat 95% 50%;
  background-size: 20px 20px;
  border-radius: 5px;
  width: 200px;
  line-height: 36px;
  text-align: left;
  font-size: 17px;
  color: ${({ theme }) => theme.fontColor};
  font-weight: 400;
  padding: 0 23px 0 12px;
  margin-right: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
`;

const Checkinout = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 153px;
`;

const SearchButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
`;

export default SortBoxFilterForm;
