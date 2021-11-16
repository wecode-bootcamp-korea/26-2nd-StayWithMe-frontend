import React, { useState } from 'react';
import styled from 'styled-components';
import SortBoxButton from '../SortBox/SortBoxButton';

const SlideBar = ({ modalSort, closeModal }) => {
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(100);

  const onPriceChange = values => {
    setPriceMin(values[0]);
    setPriceMax(values[1]);
  };

  return (
    <Container>
      <div>SlideBar</div>
      <SortBoxButton
        modalSort={modalSort}
        closeModal={closeModal}
        // optionValue={}
        buttonSort="dropdownButton"
      >
        적용하기
      </SortBoxButton>
    </Container>
  );
};

const Container = styled.div``;

export default SlideBar;
