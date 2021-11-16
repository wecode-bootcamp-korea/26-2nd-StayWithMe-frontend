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
    const isOption = true;
    if (modalSort === 'date') {
      const { convertStartDate, convertEndDate } = optionValue;
      navigate(
        `/infoList${connectQuery(
          connectQuery(queries, 'check_in', '', convertStartDate, isOption),
          'check_out',
          '',
          convertEndDate,
          isOption
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
  border-radius: 100px;
  letter-spacing: 2.5px;
  padding: 0 45px 0 45px;
  &.dropdownButton {
    margin: 0 auto;
    margin-top: 20px;
  }
`;

export default SortBoxButton;
