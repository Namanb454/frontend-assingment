'use client'

import React from 'react'
import styled, { keyframes, css } from "styled-components";

const YCarousel = () => {
  const row1 = [
    "Software Developer",
    "Backend Developer",
    "Frontend Developer",
    'UI/UX Designer',
    "Flutter Developer",
    "Product Manager",
    "Product Support Engineer",
    "Full Stack Developer",
    "Software Developer",
    "Backend Developer",
    "Frontend Developer",
    'UI/UX Designer',
    "Flutter Developer",
    "Product Manager",
    "Product Support Engineer",
  ];
  const row2 = [
    "Software Developer",
    "Backend Developer",
    "Frontend Developer",
    'UI/UX Designer',
    "Flutter Developer",
    "Product Manager",
    "Product Support Engineer",
    "Full Stack Developer",
    "Software Developer",
    "Backend Developer",
    "Frontend Developer",
    'UI/UX Designer',
    "Flutter Developer",
    "Product Manager",
    "Product Support Engineer",
  ];
  return (
    <div>
      <div className=''>
        <AppContainer className='md:h-[10vh] h-[20vh] overflow-hidden md:w-fit'>
          <Wrapper className=''>
            <Marquee className='space-y-3'>

              <MarqueeGroup className='grid md:grid-cols-3 grid-cols-2 gap-3 md:w-fit'>
                {row1.map((el) => (
                  // eslint-disable-next-line react/jsx-key
                  <ImageGroup className='ImageGroup'>
                    <h2 className='text-xs text-center bg-neutral-300 p-3 rounded-full text-black'>{el}</h2>
                  </ImageGroup>
                ))}
              </MarqueeGroup>
              <MarqueeGroup className='grid md:grid-cols-3 grid-cols-2 gap-3 md:w-fit'>
                {row2.map((el1) => (
                  // eslint-disable-next-line react/jsx-key
                  <ImageGroup className='ImageGroup '>
                    <h2 className='text-xs text-center bg-neutral-300 p-3 rounded-full text-black'>{el1}</h2>
                  </ImageGroup>
                ))}
              </MarqueeGroup>
            </Marquee>
          </Wrapper>
        </AppContainer>
      </div>
    </div>
  )
}

export default YCarousel

const AppContainer = styled.div`
  height: fit-content;
  color: #000000;

  position: relative;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  height: full;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  user-select: none;

  
`;

const scrollX = keyframes`
  from {
    left: translateY(0);
  }
  to {
    transform: translateY(-50%);
  }
`;

const common = css`
  
  
  animation: ${scrollX} 5s linear infinite;  
`;

const style = {
  '@media (max-width: 600px)': {
    width: '100%',
    justify: 'space-evenly',
  },
}

const MarqueeGroup = styled.div`
  ${common}
  ${style}
`;

const ImageGroup = styled.div`
  display: ;
  place-items: ;
`;

const ResponsiveImage = {
  '@media (max-width: 600px)': {
    width: '30vw',
    height: '10vh',
    // padding: '0 0'
  },
}

const Image1 = {
  width: '10vw',
  height: '30vh',
  padding: '0 '
}

const Image = styled.img`
  ${Image1}
  ${ResponsiveImage}
`;