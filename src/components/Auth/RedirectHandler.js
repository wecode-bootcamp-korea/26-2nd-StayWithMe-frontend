import React, { useEffect } from 'react';
import { REDIRECT_URI } from './Oauth';

const Redirect = () => {
  let accessCode = new URL(window.location.href).searchParams.get('code');
  let accessToken;

  const bodyData = {
    grant_type: 'authorization_code',
    client_id: 'c20e78f6f53398ae9e12a866b8790ce1',
    redirect_uri: REDIRECT_URI,
    code: accessCode,
  };

  const queryStringBody = Object.keys(bodyData)
    .map(k => encodeURIComponent(k) + '=' + encodeURI(bodyData[k]))
    .join('&');

  useEffect(() => {
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;',
        Accept: 'application/json',
      },
      body: queryStringBody,
    })
      .then(res => res.json())
      .then(result => {
        accessToken = result.access_token;

        accessToken &&
          fetch('http://10.58.4.251:8000/users/signin', {
            // method: 'POST',
            headers: {
              Authorization: accessToken,
            },
          })
            .then(res => res.json())
            .then(result => localStorage.setItem('yes', result.access_token));
      });
  }, []);

  return <div>무조건 렌더링</div>;
};

export default Redirect;
