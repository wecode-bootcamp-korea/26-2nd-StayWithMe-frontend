import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <div>
      <MainPic src="https://images.unsplash.com/photo-1483095348487-53dbf97d8d5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
    </div>
  );
};

const MainPic = styled.img`
  width: 100%;
`;
export default Main;
