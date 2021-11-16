import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { connectQuery } from './queryModule';

const PagingContainer = ({ resetPage }) => {
  const [currentPage, setCurrentPage] = useState('1');
  const navigate = useNavigate();
  const queries = useLocation().search;

  const checkActive = page => {
    if (resetPage !== '' && resetPage === '1') return page === resetPage;

    return page === currentPage;
  };

  const moveToPage = event => {
    const isPageElem = event.target.nodeName;
    const isEventTargetName = 'P';
    if (isPageElem !== isEventTargetName) return;

    const pageQuery = event.target.dataset.page;

    navigate(
      `/infoList${connectQuery(queries, 'page', currentPage, pageQuery)}`
    );

    setCurrentPage(pageQuery);
  };

  return (
    <Container onClick={moveToPage}>
      <MovePageButton data-page="1" active={checkActive('1')}>
        1
      </MovePageButton>
      <MovePageButton data-page="2" active={checkActive('2')}>
        2
      </MovePageButton>
      <MovePageButton data-page="3" active={checkActive('3')}>
        3
      </MovePageButton>
    </Container>
  );
};

const Container = styled.div`
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -40px;
    left: 0;
    right: 0;
    height: 1px;
    background: #ddd;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  text-align: center;
  position: relative;
`;

const MovePageButton = styled.p`
  cursor: pointer;
  display: inline-block;
  padding: 0 10px;
  line-height: 30px;
  color: ${({ theme }) => theme.fontColor};
  font-size: 20px;
  vertical-align: middle;
  opacity: 0.3;
  text-decoration: none;
  ${({ active }) =>
    active &&
    css`
      font-weight: 700;
      opacity: 1;
      color: ${({ theme }) => theme.fontColor};
    `}
`;

export default PagingContainer;
