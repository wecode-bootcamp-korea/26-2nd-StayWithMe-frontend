import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import AgreeCheckBox from './AgreeCheckBox';

const PaymentBox = () => {
  const [searchParams] = useSearchParams();
  const roomName = searchParams.get('room_name');
  const roomOption = searchParams.get('room_option');
  const price = searchParams.get('price');
  const startDate = searchParams.get('check_in');
  const endDate = searchParams.get('check_out');
  const max_people = searchParams.get('max_people');

  return (
    <PaymentPackage>
      <PaymentForm>
        <Reservation>reservations</Reservation>
        <TermsConditionsAgree>
          <PaymentList>
            <ReservationTitle>
              <ReservationName>예약 스테이</ReservationName>
              <ReservationState>
                {roomName} / {roomOption}
              </ReservationState>
            </ReservationTitle>
            <ReservationTitle>
              <ReservationName>예약일</ReservationName>
              <ReservationState>
                {startDate}-{endDate}
              </ReservationState>
            </ReservationTitle>
            <ReservationTitle>
              <ReservationName>이름</ReservationName>
              <TextInput type="text" />
            </ReservationTitle>
            <ReservationTitle>
              <div class="tit">휴대전화</div>
              <TextInput type="text" />
            </ReservationTitle>
            <ReservationTitle>
              <div class="tit">이메일</div>
              <TextInput type="text" />
            </ReservationTitle>
            <ReservationTitle>
              <div class="tit">인원</div>
              <ReservationState>{max_people}명</ReservationState>
            </ReservationTitle>
            <ReservationTitle>
              <ReservationName>예상결제금액</ReservationName>
              <ReservationState>
                {Math.floor(price).toLocaleString('ko-KR')}원
              </ReservationState>
            </ReservationTitle>
            <ReservationTitle>
              결제방법 선택
              <OptionBox>
                <input type="radio" name="Pay" />
                <span> 신용카드 결제 </span>
                <input type="radio" name="Pay" />
                <span> 네이버페이 </span>
              </OptionBox>
            </ReservationTitle>
          </PaymentList>
        </TermsConditionsAgree>
        <AgreeCheckBox />
        <PayButton>
          <PaymentButton type="submit">결제하기</PaymentButton>
        </PayButton>
      </PaymentForm>
    </PaymentPackage>
  );
};

const PaymentPackage = styled.div`
  margin-top: 50px;
  border: 1px solid #e0e0e0;
  padding: 70px 100px;
`;
const PaymentForm = styled.form`
  max-width: 750px;
  max-height: 800px;
`;

const Reservation = styled.div`
  font-size: 14px;
  font-weight: 700;
  border-bottom: 5px solid #000;
  padding-bottom: 20px;
  letter-spacing: 18px;
  text-transform: uppercase;
  text-align: center;
`;

const PaymentList = styled.ul`
  margin-top: 5px;
`;

const ReservationTitle = styled.li`
  font-size: 13px;
  width: 600px;
  height: 50px;
  padding-top: 13px;
  padding-bottom: 13px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OptionBox = styled.div`
  width: 62%;
`;

const ReservationName = styled.div`
  font-size: 15 px;
`;

const ReservationState = styled.div`
  width: 62%;
`;

const PayButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`;

const PaymentButton = styled.button`
  background-color: black;
  color: white;
  margin-top: 30px;
  display: block;
  text-align: center;
  border: 0;
  height: 40px;
  width: 60%;
`;

const TermsConditionsAgree = styled.div`
  color: #000;
`;

const TextInput = styled.input`
  width: 62%;
  height: 30px;
`;

export default PaymentBox;
