import React from 'react';
import KakaoButton from './KakaoButton';
import styled from 'styled-components';

const Login = () => {
  return (
    <ContainerBox>
      <LoginContainer>
        <FrontText>LOGIN</FrontText>
        <LoginText>로그인</LoginText>
        <Line />
        <LoginText>SNS 계정으로 시작하기</LoginText>
        <KakaoButton />
      </LoginContainer>
    </ContainerBox>
  );
};

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #333;
  padding: 80px 30px;
`;

const FrontText = styled.div`
  font-size: 25px;
  padding: 10px;
`;

const LoginText = styled.div`
  font-size: 15px;
  padding: 10px;
`;

const Line = styled.div`
  width: 200px;
  height: 1px;
  border-bottom: 1px solid #333;
`;
export default Login;
