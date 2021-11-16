import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { connectQuery } from '../queryModule';

const SortBoxButton = ({
  buttonSort,
  children,
  prevSearchValue,
  curSearchValue,
  closeModal,
  optionValue,
  modalSort,
}) => {
  const navigate = useNavigate();
  const queries = useLocation().search;

  const searchToOption = () => {
    const isModal = true;
    if (modalSort === 'date') {
      const { convertStartDate, convertEndDate } = optionValue;
      navigate(
        `/infoList${connectQuery(
          connectQuery(queries, 'check_in', '', convertStartDate, isModal),
          'check_out',
          '',
          convertEndDate,
          isModal
        )}`
      );
    }
    if (modalSort === 'price') {
      const { priceMin, priceMax } = optionValue;
      const convertPriceMin = `${priceMin}0000`;
      const convertPriceMax = `${priceMax}0000`;

      navigate(
        `/infoList${connectQuery(
          connectQuery(queries, 'low', '', convertPriceMin, isModal),
          'high',
          '',
          convertPriceMax,
          isModal
        )}`
      );
    }
    if (modalSort === 'people') {
      const { currentCount } = optionValue;

      navigate(
        `/infoList${connectQuery(
          queries,
          'max_people',
          '',
          currentCount,
          isModal
        )}`
      );
    }
    if (modalSort === 'stay') {
      const isCheckedCategories = [];

      for (const [key, val] of Object.entries(optionValue)) {
        if (val) isCheckedCategories.push(key);
      }
      navigate(
        `/infoList${connectQuery(
          connectQuery(
            connectQuery(queries, 'category', '', '1', isModal),
            'category',
            '',
            '2',
            isModal
          ),
          'category',
          '',
          '3',
          isModal
        )}`
      );
    }
  };

  const searchToKeyword = event => {
    navigate(
      `/infoList${connectQuery(
        queries,
        'search',
        prevSearchValue,
        curSearchValue
      )}`
    );
  };

  return (
    <StyledButton
      onClick={
        buttonSort === 'dropdownButton'
          ? () => {
              searchToOption();
              closeModal();
            }
          : searchToKeyword
      }
      className={buttonSort}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: block;
  background-color: #000;
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 36px;
  border: none;
  border-radius: 100px;
  letter-spacing: 2.5px;
  padding: 0 45px 0 45px;
  &.dropdownButton {
    margin: 0 auto;
    margin-top: 20px;
  }
`;

export default SortBoxButton;
