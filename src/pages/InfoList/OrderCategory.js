import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { connectQuery } from './queryModule';

const OrderCategory = () => {
  const [currentSort, setCurrentSort] = useState('id');
  const navigate = useNavigate();
  const queries = useLocation().search;

  const checkActive = sort => {
    return sort === currentSort;
  };

  const moveToNewSort = event => {
    const isSortElem = event.target.nodeName;
    const isEventTargetName = 'LI';
    if (isSortElem !== isEventTargetName) return;

    const sortQuery = event.target.dataset.sort;

    navigate(
      `/infoList${connectQuery(queries, 'sort', currentSort, sortQuery)}`
    );

    setCurrentSort(sortQuery);
  };

  return (
    <Container>
      <OrderCategoryLists onClick={moveToNewSort}>
        <ChangeSortButton data-sort="id" active={checkActive('id')}>
          최신순
        </ChangeSortButton>
        <ChangeSortButton data-sort="high" active={checkActive('high')}>
          높은 가격순
        </ChangeSortButton>
        <ChangeSortButton data-sort="low" active={checkActive('low')}>
          낮은 가격순
        </ChangeSortButton>
      </OrderCategoryLists>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 120px;
  border-bottom: 3px solid #000;
  font-size: 14px;
  line-height: 2px;
`;

const OrderCategoryLists = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 14px;
`;

const ChangeSortButton = styled.li`
  display: list-item;
  margin-left: 20px;
  cursor: pointer;
  color: #999999;
  font-size: 16px;
  text-decoration: none;
  z-index: 20;
  ${({ active }) =>
    active &&
    css`
      font-weight: 700;
      opacity: 1;
      color: ${({ theme }) => theme.fontColor};
    `}
  }
`;

export default OrderCategory;
