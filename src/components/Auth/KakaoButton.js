import React from 'react';
import { KAKAO_AUTH_URL } from './Oauth';

const KakaoButton = () => {
  return (
    <div>
      <a id="custom-login-btn" href={KAKAO_AUTH_URL}>
        <img
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          width="222"
          alt="카카오 로그인 버튼"
        />
      </a>
    </div>
  );
};

export default KakaoButton;
