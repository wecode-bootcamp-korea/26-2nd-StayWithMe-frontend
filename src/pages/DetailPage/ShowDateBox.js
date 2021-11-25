import React from 'react';
import styled from 'styled-components';

const ShowDateBox = ({ check_in, check_out }) => {
  return (
    <ShowDate>
      CHECK-IN : {check_in} &nbsp; CHECK-OUT : {check_out}
    </ShowDate>
  );
};

const ShowDate = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: black;
  text-align: center;
  margin-top: 30px;
`;
export default ShowDateBox;
