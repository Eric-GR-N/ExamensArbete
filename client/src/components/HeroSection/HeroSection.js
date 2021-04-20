import React from 'react'
import { HeroContainer, StyledSpanMeter ,StyledSpan, Plant, Temp, HeroHeader, InnerContainer, InnerContainerTop,OverLay, IoTBox } from './HeroSectionElements';
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
                        {/* <Plant/> */}
                        <StyledSpan>
                              <StyledSpanMeter moist={moist}/>
                        </StyledSpan>
                </IoTBox>
                <IoTBox>
                        {/* <Plant/> */}
                        <StyledSpan>
                              <StyledSpanMeter moist={moist}/>
                        </StyledSpan>
                </IoTBox>
                <IoTBox>
                        {/* <Plant/> */}
                        <StyledSpan>
                              <StyledSpanMeter moist={moist}/>
                        </StyledSpan>
                </IoTBox>

            </InnerContainer>
        </HeroContainer>
    )
}

export default HeroSection
