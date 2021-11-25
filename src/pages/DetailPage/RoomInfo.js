import React from 'react';
import styled from 'styled-components';

export default function RoomInfo({ room }) {
  // const []
  return (
    <Infobox>
      <span>{room.introduction}</span>
      <CenterMenu>PICK</CenterMenu>
      <CenterMenu> PROMOTION</CenterMenu>
      <CenterMenu> MAGAZINE</CenterMenu>

      <span>{room.name}</span>
    </Infobox>
  );
}

const Infobox = styled.div`
  width: 1200px;
  height: 80px;
  margin-left: 350px;
  padding: 20px;
  background-color: black;
  color: white;
  position: absolute;
  bottom: 0;
  font-size: 30px;
  font-weight: bold;
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CenterMenu = styled.div`
  font-size: 20px;
  color: grey;
  padding: 10px;
`;
