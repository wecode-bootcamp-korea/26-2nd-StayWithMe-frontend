import React, { useEffect } from 'react';
import { REDIRECT_URI } from './Oauth';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
  const navigate = useNavigate();
  let accessCode = new URL(window.location.href).searchParams.get('code');

  const goToMain = () => {
    navigate('/');
  };

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
        let accessToken = result.access_token;

        accessToken &&
          fetch('http://13.125.209.17:8000/users/signin', {
            method: 'POST',
            headers: {
              Authorization: accessToken,
            },
          })
            .then(res => res.json())
            .then(result => {
              localStorage.setItem('token', accessToken);
            });
        goToMain();
      });
  }, []);

  return <div />;
};

export default Redirect;
