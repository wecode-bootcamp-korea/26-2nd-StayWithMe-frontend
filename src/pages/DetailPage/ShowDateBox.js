import React from 'react';
import styled from 'styled-components';

const ShowDateBox = ({ check_in, check_out }) => {
  return <ShowDate>{`${check_in}-${check_out}`}</ShowDate>;
};

const ShowDate = styled.div``;
export default ShowDateBox;
