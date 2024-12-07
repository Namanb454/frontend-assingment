'use client'

import React from 'react'
import styled, { keyframes, css } from "styled-components";
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

const ImageCarousel = () => {



    const row1 = [
        "https://techype.in/brand5.svg",
        "https://techype.in/brand1.svg",
        "https://techype.in/brand2.svg",
        "https://techype.in/brand3.svg",
        "https://techype.in/brand4.svg",


    ];
    const row2 = [
        "https://techype.in/brand5.svg",
        "https://techype.in/brand1.svg",
        "https://techype.in/brand2.svg",
        "https://techype.in/brand3.svg",
        "https://techype.in/brand4.svg",

    ];
    return (
        <div>
            <div>
                <AppContainer className='xl:h-[40vh] h-[20vh] overflow-hidden'>
                    <Wrapper className='Wrapper'>
                        <Marquee className='Marquee'>
                            <MarqueeGroup className='MarqueeGroup'>
                                {row1.map((el) => (
                                    <ImageGroup key={el} className='ImageGroup'>
                                        <Image src={el} className='rounded-2xl opacity-50 md:mx-0 mx-10' />
                                    </ImageGroup>
                                ))}
                            </MarqueeGroup>
                            <MarqueeGroup className='MarqueeGroup'>
                                {row2.map((el1) => (
                                    <ImageGroup key={el1} className='ImageGroup'>
                                        <Image src={el1} className='rounded-2xl opacity-50 md:mx-0 mx-10' />
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

export default ImageCarousel

const AppContainer = styled.div`
  width: 98vw;
  height: ;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 20s linear infinite;  
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