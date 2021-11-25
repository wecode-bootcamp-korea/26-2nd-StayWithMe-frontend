import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
function BottomSlider({ detail }) {
  const settings = {
    dots: true,
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
        <SwipperButton />
      </DetailTitle>
      <SliderContainer>
        <Slider {...settings}>
          {/* {detail.map((_, idx) => {
          return <div key={idx}>{idx}</div>;
        })} */}
          {detail.map((info, idx) => (
            <Slide key={info.id} info={info} index={idx + 1} />
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
  margin-top: 200px;
  position: relative;
  color: #fff;
`;

const SliderContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 300px;

  .slick-prev {
    left: -100px;
  }
  .slick-next {
    right: -100px;
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
  margin: 200px 0 0 60px;
  &:after {
    content: '';
    display: block;
    width: 120px;
    border-bottom: 5px solid black;
    margin: 20px 0px;
  }
`;
const SwipperButton = styled.div`
  margin-top: 400px;
  position: absolute;
  margin: 500px 0 0 60px;
`;

const PrevBtn = styled.img`
  width: 80px;
  height: 80px;
  margin: 0 20px 0 10px;
`;

const NextBtn = styled.img`
  width: 80px;
  height: 80px;
`;

const RoomSlide = styled.div`
  width: 700px;
  height: 700px;
  background-image: url(${props => props.url && props.url});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
const RoomImg = styled.div`
  width: 600px;
  height: 600px;
  position: relative;
`;
const RoomDetailInfo = styled.div`
  width: 700px;
  height: 140px;
  position: absolute;
  bottom: 67px;
  background-color: black;
  opacity: 0.7;
`;
const TopLine = styled.div`
  width: 460px;
  height: 70px;
  display: flex;
  justify-content: space-between;
`;
const RoomName = styled.div`
  font-size: 30px;
`;
const RoomPrice = styled.div`
  font-size: 30px;
`;
const RoomOption = styled.div`
  font-size: 15px;
`;
const OptionLine = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
`;
const OptionInfo = styled.div`
  font-size: 20px;
`;

const PayButton = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: white;
  z-index: 99999;
`;

export default BottomSlider;

function Slide({ info, index, ...args }) {
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
                <RoomPrice>{info.price}</RoomPrice>
              </TopLine>
              <OptionLine>
                <OptionInfo>{`기준${info.min_people}명 (최대 ${info.max_people}명) 침구${info.number_of_bed}개`}</OptionInfo>
                <PayButton to="/PaymentPage"> BOOK </PayButton>
              </OptionLine>
            </RoomDetailInfo>
          </RoomImg>
        </RoomSlide>
      </h3>
    </div>
  );
}
