import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './components/Auth/Login';
import Main from './pages/Main/Main';
import InfoListPage from './pages/InfoList/InfoListPage';
import DetailPage from './pages/DetailPage/DetailPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/infoList" element={<InfoListPage />} />
        <Route path="/infoList?*" element={<InfoListPage />} />
        <Route path="/detailPage" element={<DetailPage />} />
        <Route path="/paymentPage" element={<PaymentPage />} />
        <Route path="/LoginPage" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
