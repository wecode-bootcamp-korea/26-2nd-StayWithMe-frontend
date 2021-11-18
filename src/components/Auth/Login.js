import React, { useEffect } from 'react';
import styled from 'styled-components';

const { Kakao } = window;
const loginWithKakao = () => {
  Kakao.Auth.authorize({
    redirectUri: 'http://localhost:3000/LoginPage',
  });
};

const Login = () => {
  useEffect(() => {
    let accessToken;
    window.Kakao.Auth.login({
      //카카오에 로그인을 하겠다. side effect이기 때문에 useEffect를 사용한다
      scope: 'profile_nickname, account_email', // 가져오는 정보의 범위를 지정한다
      success: function (authObj) {
        // 성공하면 function이 실행된다.//콜백으로//
        console.log(authObj);
        accessToken = authObj.access_token;
        console.log(accessToken);
      },
    });

    fetch('http://10.58.4.251:8000/users/signin', {
      method: 'post',
      headers: {
        Authorization: accessToken,
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) {
          console.log('저장 완료');
        }
      });
  }, []);

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
            alt="카카오 로그인 버튼"
          />
        </a>
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
