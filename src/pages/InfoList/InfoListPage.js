import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import SubtitleTemplate from './SubtitleTemplate';
import SortBoxTemplate from './SortBox/SortBoxTemplate';
import SortBoxFilterForm from './SortBox/SortBoxFilterForm';
import OrderCategory from './OrderCategory';
import InfoListTemplate from './InfoListTemplate';
import InfoListForm from './InfoListForm';

const InfoListPage = () => {
  const [defaultPage, setDefaultPage] = useState('');

  // const resetPage = useCallback(page => {
  //   setDefaultPage(page);
  // }, []);

  const resetPage = page => {
    setDefaultPage(page);
  };

  return (
    <Container>
      <SubtitleTemplate />
      <SortBoxTemplate>
        <SortBoxFilterForm />
      </SortBoxTemplate>
      <OrderCategory />
      <InfoListTemplate defaultPage={defaultPage}>
        <InfoListForm resetPage={resetPage} />
      </InfoListTemplate>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1400px;
  margin: 75px auto;
  padding: 0 2% 0;
`;

export default InfoListPage;
