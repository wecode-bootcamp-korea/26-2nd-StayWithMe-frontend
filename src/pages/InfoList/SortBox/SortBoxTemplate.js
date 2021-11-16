import React from 'react';
import styled from 'styled-components';

const SortBoxTemplate = ({ children }) => {
  return (
    <Container>
      <SortBoxTemplateInner>{children}</SortBoxTemplateInner>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  min-width: 1150px;
`;

const SortBoxTemplateInner = styled.div`
  margin: 0 auto;
  border-top: 4px solid #000;
  z-index: 20;
`;

export default SortBoxTemplate;
