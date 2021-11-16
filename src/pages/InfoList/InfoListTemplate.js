import React from 'react';
import styled from 'styled-components';
import PagingContainer from './PagingContainer';

const InfoListTemplate = ({ children }) => {
  return (
    <Container>
      <InfoListTemplateInner>{children}</InfoListTemplateInner>
      <PagingContainer />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
`;

const InfoListTemplateInner = styled.div`
  margin: 30px 0 0 -72px;
`;

export default InfoListTemplate;
