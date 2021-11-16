import React from 'react';
import styled from 'styled-components';

const SubtitleTemplate = () => {
  return (
    <Container>
      <Subtitle>FIND STAY</Subtitle>
      <SubInfo>머무는 것 자체로 여행이 되는 공간</SubInfo>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  padding-bottom: 98px;
  padding-top: 70px;
`;

const Subtitle = styled.div`
  font-size: 22px;
  letter-spacing: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.fontColor};
  text-indent: 14px;
`;

const SubInfo = styled.div`
  font-size: 17px;
  color: ${({ theme }) => theme.fontColor};
  font-weight: 400;
  line-height: 28px;
  margin: 10px 0 0;
`;

export default SubtitleTemplate;
