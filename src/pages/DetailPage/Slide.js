import React, { useState } from 'react';
import styled from 'styled-components';

export default function Slide({ room }) {
  const [whichIsShown, setWhichIsShown] = useState(0);
  const prevSlide = () => {
    setWhichIsShown(prev => {
      if (prev - 1 < 0) return 2;
      return prev - 1;
    });
  };

  const nextSlide = () => {
    setWhichIsShown(prev => {
      if (prev + 1 > 2) return 0;
      return prev + 1;
    });
  };

  return (
    <Div>
      <BackgroundImg>
        {room.images &&
          room.images.map((image, idx) => {
            if (whichIsShown === idx) {
              return (
                <ImageWrapper key={idx}>
                  <Image alt={idx} src={image} />
                </ImageWrapper>
              );
            }
          })}
        <RightButton src="./SliderImg/right.png" onClick={nextSlide} />
        <LeftButton src="./SliderImg/left.png" onClick={prevSlide} />
      </BackgroundImg>
    </Div>
  );
}

const BackgroundImg = styled.div`
  position: relative;
  overflow: hidden;
`;
const ImageWrapper = styled.div`
  width: 100vw;
  height: 72vh;
`;
const Image = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;
const RightButton = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  top: 45%;
  right: 0;
  opacity: 0.8;
  cursor: pointer;
  z-index: 1;
`;
const LeftButton = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  top: 45%;
  opacity: 0.8;
  cursor: pointer;
  z-index: 1;
`;

const Div = styled.div``;
