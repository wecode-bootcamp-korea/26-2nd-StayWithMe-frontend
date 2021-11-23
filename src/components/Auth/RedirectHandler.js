import React, { useEffect } from 'react';
import { REDIRECT_URI } from './Oauth';

const Redirect = () => {
  let accessCode = new URL(window.location.href).searchParams.get('code');
  // let accessToken;

  console.log(accessCode);

  const bodyData = {
    grant_type: 'authorization_code',
    client_id: '00d03738b207f333d61f57b9d9937fcf',
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
      // body: formData,
      body: queryStringBody,
    })
      .then(res => res.json())
      .then(result => {
        console.log('result', result);
        let accessToken = result.access_token;

        accessToken &&
          fetch('http://10.58.4.242:8000/users/signin', {
            method: 'POST',
            headers: {
              Authorization: accessToken,
            },
          })
            .then(res => res.json())
            .then(result => localStorage.setItem('token', accessToken));
      });
  }, []);

  return <div>무조건 렌더링</div>;
};

export default Redirect;
