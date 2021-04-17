import React from 'react'
import { HeroContainer, HeroVideoContainer, HeroBackgroundVideo, StyledSpan, HeroHeader, InnerContainer, InnerContainerTop,OverLay, IoTBox, IoTBoxImage } from './HeroSectionElements';
import styled from 'styled-components';
import Home from '../../resources/Home.mp4';
import Snow from '../../resources/Snow.mp4';


const HeroSection = () => {
    const moist = 90;
    return (
        <HeroContainer id="home">
            <HeroVideoContainer>
                        <OverLay />
                        {/* <HeroBackgroundVideo src={Snow} autoPlay muted/> */}
            </HeroVideoContainer>
            <InnerContainerTop>

            </InnerContainerTop>
            <InnerContainer>
                <IoTBox>
                    <IoTBoxImage/>
                    <StyledSpan moist={moist} />
                </IoTBox>
                
                <IoTBox>
                    <IoTBoxImage/>
                    <StyledSpan moist={moist} />
                </IoTBox>

                <IoTBox>
                    <IoTBoxImage/>
                    <StyledSpan moist={moist} />
                </IoTBox>

            </InnerContainer>
        </HeroContainer>
    )
}

export default HeroSection
