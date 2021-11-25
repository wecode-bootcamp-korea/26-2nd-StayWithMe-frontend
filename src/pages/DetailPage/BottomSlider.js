import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';

function BottomSlider({ room, detail, check_in, check_out }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };

  return (
    <Container>
      <DetailTitle>
        <Title>ROOM</Title>
        {/* <SwipperButton /> */}
      </DetailTitle>
      <SliderContainer>
        <Slider {...settings}>
          {detail.map((info, idx) => (
            <Slide
              key={info.id}
              room={room}
              info={info}
              check_in={check_in}
              check_out={check_out}
              index={idx + 1}
            />
          ))}
        </Slider>
      </SliderContainer>
    </Container>
  );
}

function PrevButton(props) {
  return <PrevBtn {...props} src="./images/prevbutton.png" />;
}

function NextButton(props) {
  return <NextBtn {...props} src="./images/nextbutton.png" />;
}

const Container = styled.div`
  position: relative;
  color: #fff;
`;

const SliderContainer = styled.div`
  width: 70vw;
  margin-top: 100px;
  position: absolute;
  top: 0;
  left: 500px;

  .slick-prev {
    top: 500px;
    left: -410px;
  }
  .slick-next {
    top: 500px;
    left: -290px;
  }
`;

const DetailTitle = styled.div`
  width: 900px;
  height: 800px;
  position: relative;
  font-size: 80px;
  font-weight: bold;
  background-color: #f5f5f5;
`;

const Title = styled.div`
  color: black;
  font-size: 60px;
  position: absolute;
  margin: 180px 0 0 80px;
  &:after {
    content: '';
    display: block;
    width: 120px;
    border-bottom: 5px solid black;
    margin: 20px 0px;
  }
`;

const PrevBtn = styled.img`
  width: 80px;
  height: 80px;
`;

const NextBtn = styled.img`
  width: 80px;
  height: 80px;
`;

const RoomSlide = styled.div`
  width: 650px;
  background-image: url(${props => props.url && props.url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const RoomImg = styled.div`
  width: 600px;
  height: 600px;
  position: relative;
`;
const RoomDetailInfo = styled.div`
  width: 650px;
  height: 140px;
  position: absolute;
  bottom: 0px;
  background-color: black;
  opacity: 0.7;
`;
const TopLine = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
`;
const RoomName = styled.div`
  font-size: 30px;
  padding: 20px;
`;
const RoomPrice = styled.div`
  font-size: 30px;
  padding: 20px;
`;
const RoomOption = styled.div`
  font-size: 20px;
  padding: 5px;
`;
const OptionLine = styled.div`
  height: 70px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
`;
const OptionInfo = styled.div`
  font-size: 20px;
`;

const PayButton = styled(Link)`
  font-size: 25px;
  text-decoration: none;
  color: white;
  z-index: 99999;
`;

export default BottomSlider;

function Slide({ room, info, index, check_in, check_out, ...args }) {
  const qs = `?room_name=${room.name}&check_in=${check_in}&check_out=${check_out}&price=${info.price}&room_option=${info.options[0].name}&max_people=${info.max_people}`;
  console.log(qs);
  return (
    <div {...args}>
      <h3>
        <RoomSlide url={info.room_image[0].url}>
          <RoomImg>
            <RoomDetailInfo>
              <TopLine>
                <RoomName>
                  {info.name}
                  <RoomOption>{info.options[0].name}</RoomOption>
                </RoomName>
                <RoomPrice>
                  {`₩${Math.floor(info.price).toLocaleString('ko-KR')}~`}
                </RoomPrice>
              </TopLine>
              <OptionLine>
                <OptionInfo>{`기준${info.min_people}명 (최대 ${info.max_people}명) 침구${info.number_of_bed}개`}</OptionInfo>
                <PayButton to={`/PaymentPage` + qs}> BOOK </PayButton>
              </OptionLine>
            </RoomDetailInfo>
          </RoomImg>
        </RoomSlide>
      </h3>
    </div>
  );
}
