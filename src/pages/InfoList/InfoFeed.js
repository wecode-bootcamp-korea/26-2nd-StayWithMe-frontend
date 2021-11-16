import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const InfoFeed = ({ info, dateInfo }) => {
  const [stateId, setStateId] = useState('');
  const { check_in, check_out } = dateInfo;
  const navigate = useNavigate();

  const goToDetailPage = event => {
    navigate(`/detailPage?room_id=${stateId}`, {
      state: { check_in, check_out },
    });
  };

  useEffect(() => {
    setStateId(info.id);
  }, [info]);

  return (
    <Container onClick={goToDetailPage}>
      <InfoFeedInner>
        <InfoLeftContainer>
          <InfoName>
            {info.name}
            <InfoSubname>{info.category}</InfoSubname>
          </InfoName>
          <InfoMainContainer>
            <InfoAddressContainer>
              <InfoLocal>
                {info.address.split(' ').slice(0, 2).join(' / ')}
              </InfoLocal>
              <br />
              기준 {info.min_people}명 (최대 {info.max_people})
              <br />
              {`₩${Math.floor(info.min_price).toLocaleString(
                'ko-KR'
              )} ~ ₩${Math.floor(info.max_price).toLocaleString('ko-KR')}`}
            </InfoAddressContainer>
            <BookButton>예약하기</BookButton>
          </InfoMainContainer>
        </InfoLeftContainer>
        <InfoFeedImgContainer>
          <InfoFeedImg url={info.image_url} />
        </InfoFeedImgContainer>
      </InfoFeedInner>
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 50%;
  position: relative;
  font-size: 14px;
  margin-top: 60px;
  padding: 128px 0 50px 70px;
`;

const InfoFeedInner = styled.div``;

const InfoLeftContainer = styled.div`
  &::before,
  ::after {
    clear: both;
    display: block;
    content: '';
    line-height: 0;
  }
`;

const InfoName = styled.div`
  font-size: 35px;
  position: absolute;
  top: 0;
  left: 70px;
  color: #181818;
  font-weight: 500;
  overflow: hidden;
  text-decoration: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  z-index: 10;
`;

const InfoSubname = styled.span`
  display: block;
  text-decoration: uppercase;
  font-size: 15px;
  letter-spacing: 3.6px;
  margin-top: 7px;
`;
const InfoMainContainer = styled.div`
  width: 30%;
  float: left;
`;

const InfoAddressContainer = styled.div`
  font-size: 16px;
  color: #333;
  line-height: 2;
  margin-top: 30px;
  cursor: pointer;
`;

const InfoLocal = styled.span``;

const BookButton = styled.p`
  cursor: pointer;
  font-size: 18px;
  color: #0a0a0a;
  line-height: 30px;
  border-bottom: 1px solid #000;
  display: inline-block;
  font-weight: 700;
  margin-top: 20px;
`;

const InfoFeedImgContainer = styled.div`
  clear: both;
  position: absolute;
  bottom: 48px;
  right: 0;
  padding: 70px 0 0;
  width: 59%;
`;

const InfoFeedImg = styled.div`
  background-image: url(${props => props.url && props.url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  height: 245px;
`;

export default InfoFeed;
