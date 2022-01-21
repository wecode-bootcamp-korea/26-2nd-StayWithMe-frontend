import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import Slide from './Slide';
import BottomSlider from './BottomSlider';
import RoomInfo from './RoomInfo';
import ShowDateBox from './ShowDateBox';
import { AiOutlineSwapLeft } from 'react-icons/ai';
import { API } from '../../config';

const DetailPage = () => {
  const [room, setRoom] = useState({});
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const { check_in, check_out } = location.state ?? {};

  // const params = new URLSearchParams(location.search.substring(1));
  useEffect(() => {
    const roomId = searchParams.get('room_id');

    fetch(
      `${API.infoList}/${roomId}?start_date=${check_in}&end_date=${check_out}`
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        console.log('하이');
        setRoom(res.result);
      });
  }, []);

  // room_name (아담독채)
  // 날짜 (start_date, end_date)
  // price_number
  // 룸 옵션 (기본형)
  //

  return (
    <Container>
      <Head>
        <ReturnBtn to="/infoList">
          <AiOutlineSwapLeft className="backIcon" /> 돌아가기
        </ReturnBtn>
      </Head>
      <ImgBox>
        <Slide room={room} />
        <RoomInfo room={room} />
      </ImgBox>
      <ShowDate>
        <ShowDateBox check_in={check_in} check_out={check_out} />
      </ShowDate>
      <DetailRoom>
        {room.rooms && (
          <BottomSlider
            room={room}
            detail={room.rooms}
            check_in={check_in}
            check_out={check_out}
          />
        )}
      </DetailRoom>
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  margin-top: 30px;
`;
const Head = styled.div`
  height: 100px;
  font-size: 20px;
  position: relative;
  border-bottom: 1px solid #e8e8e8;
`;

const ReturnBtn = styled(Link)`
  width: 150px;
  padding-right: 10px;
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 25px;
  text-decoration: none;
  color: black;

  .backIcon {
    margin-right: 10px;
    font-size: 30px;
    color: gray;
  }
`;
const ImgBox = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
`;
const ShowDate = styled.div`
  margin-top: 80px;
`;

const DetailRoom = styled.div`
  margin-top: 150px;
`;
