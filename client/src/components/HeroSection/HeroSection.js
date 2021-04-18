import React from 'react'
import { HeroContainer, HeroVideoContainer, HeroBackgroundVideo, StyledSpanMeter ,StyledSpan, Plant, HeroHeader, InnerContainer, InnerContainerTop,OverLay, IoTBox, IoTBoxImage } from './HeroSectionElements';
import styled from 'styled-components';
import Home from '../../resources/Home.mp4';
import Snow from '../../resources/Snow.mp4';
import forest from '../../resources/forest2.jpg';


const HeroSection = () => {
    const moist = 100;
    return (
        <HeroContainer id="home">
                        {/* <OverLay /> */}
            <InnerContainerTop img={forest}>

            </InnerContainerTop>
            <InnerContainer>
                <IoTBox>
                    <IoTBoxImage>
                        <Plant/>
                    </IoTBoxImage>
                    <StyledSpan>
                        <StyledSpanMeter moist={moist}/>
                    </StyledSpan>
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
