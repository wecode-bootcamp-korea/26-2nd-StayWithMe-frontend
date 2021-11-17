import React from 'react';
import styled from 'styled-components';

const { Kakao } = window;
const loginWithKakao = () => {
  Kakao.Auth.authorize({
    redirectUri: 'http://localhost:3000/LoginPage',
  });
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
  width: 300px;
  height: 400px;
`;

const FrontText = styled.div`
  font-size: 25px;
  padding: 10px;
`;

const LoginText = styled.div`
  font-size: 15px;
  padding: 10px;
`;

const InputContainer = styled.div`
  list-style: none;
  line-height: 20px;
`;

const Line = styled.div`
  width: 200px;
  height: 1px;
  border-bottom: 1px solid #333;
`;

const Login = () => {
  return (
    <ContainerBox>
      <LoginContainer>
        <FrontText>LOGIN</FrontText>
        <LoginText>로그인</LoginText>
        <Line />
        <LoginText>SNS 계정으로 시작하기</LoginText>
        <a id="custom-login-btn" onClick={loginWithKakao}>
          <img
            src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
            width="222"
          />
        </a>
      </LoginContainer>
    </ContainerBox>
  );
};

export default Login;
