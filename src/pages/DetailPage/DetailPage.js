import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Slide from './Slide';
import BottomSlider from './BottomSlider';
import RoomInfo from './RoomInfo';
import ShowDateBox from './ShowDateBox';
import { AiOutlineSwapLeft } from 'react-icons/ai';

const DetailPage = () => {
  const [room, setRoom] = useState({});
  const location = useLocation();
  const params = new URLSearchParams(location.search.substring(1));

  const { check_in, check_out } = location.state && location.state;

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => {
        setRoom(data.result);
      });
  }, []);
  // console.log(room);
  return (
    <Container>
      <Head>
        <ReturnBtn to="./main">
          <AiOutlineSwapLeft className="backIcon" /> 돌아가기
        </ReturnBtn>
      </Head>
      <ImgBox>
        <Slide room={room} />
        <RoomInfo room={room} />
      </ImgBox>
      <ShowDateBox check_in={check_in} check_out={check_out} />
      <DetailRoom>
        {room.rooms && <BottomSlider detail={room.rooms} />}
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

const DetailRoom = styled.div`
  margin-top: 400px;
`;
