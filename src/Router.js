import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './components/Auth/Login';
import Main from './pages/Main/Main';
import InfoList from './pages/InfoList/InfoList';
import DetailPage from './pages/DetailPage/DetailPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/infoList" element={<InfoList />} />
          <Route exact path="/detailPage" element={<DetailPage />} />
          <Route exact path="/paymentPage" element={<PaymentPage />} />
          <Route exact path="/LoginPage" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
