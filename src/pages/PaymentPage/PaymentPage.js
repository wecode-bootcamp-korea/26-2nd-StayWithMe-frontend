import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import PaymentBox from './PaymentBox';

const PaymentPage = () => {
  const [paymentData, setPaymentData] = useState({});
  const [searchParams, withSearchParams] = useSearchParams();
  const [isAccomodationStyle, setAccomodationStyle] = useState();
  const [isRoomsName, setRoomsName] = useState();
  const [isRoomsMaxPeople, setRoomsMaxPeople] = useState();
  const [isNumber, setNumber] = useState();

  const roomName = searchParams.get('roomsName');
  const price = searchParams.get('roomsPrice');
  const startDate = searchParams.get('check_in');
  const endDate = searchParams.get('check_out');

  useEffect(() => {
    fetch('./data/paymentData.json/')
      .then(res => res.json())
      .then(res => {
        setPaymentData(res.result.rooms[0]);
        console.log(res.result.rooms[0]);
      });
  }, []);

  const number = Math.round(price);
  const priceNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <PaymentContainer>
      <PaymentSubContainer>
        <PaymentFirstLine>BOOKING</PaymentFirstLine>
        <BookingDataTab>
          <HotelName>{roomName}</HotelName>
          <BookingPeriod>
            {startDate}~{endDate}
          </BookingPeriod>
          <LentFee>{priceNumber}원</LentFee>
        </BookingDataTab>
      </PaymentSubContainer>
      <PaymentBox
        setAccomodationStyle={setAccomodationStyle}
        setRoomsName={setRoomsName}
        setRoomsMaxPeople={setRoomsMaxPeople}
        setNumber={setNumber}
      />
    </PaymentContainer>
  );
};

const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  border: 1px solid black;
`;

const PaymentSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  text-align: center;
  width: 100%;
  padding-top: 70px;
`;

const PaymentFirstLine = styled.div`
  font-size: 18px;
  letter-spacing: 14px;
  color: #000;
  text-indent: 84px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const BookingDataTab = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-bottom: 2px solid #ddd;
  width: 800px;
`;

const HotelName = styled.div`
  font-size: 26px;
  font-weight: 500;
  color: #000;
`;

const BookingPeriod = styled.div`
  font-size: 16px;
  color: #000;
  cursor: pointer;
  padding: 0 23px 0 0;
  background-size: 20px 20px;
`;

const LentFee = styled.div`
  font-size: 26px;
  font-weight: 500;
  color: #000;
`;

export default PaymentPage;
