import React from 'react'
import { HeroContainer, StyledSpanMeter ,StyledSpan, Plant, PlantRuler, TempRuler, LeakRuler ,Temp, HeroHeader, InnerContainer, InnerContainerTop,OverLay, IoTBox } from './HeroSectionElements';
import forest from '../../resources/forest2.jpg';


const HeroSection = () => {
    const moist = 10;
    const temp = 30;
    const leak = 90;
    return (
        <HeroContainer id="home">
                        {/* <OverLay /> */}
            <InnerContainerTop img={forest}>

            </InnerContainerTop>
            <InnerContainer>
                <IoTBox>
                        <Plant/>
                        <StyledSpan >
                              <StyledSpanMeter value={moist} moist={moist}/>
                        </StyledSpan>
                </IoTBox>
                <IoTBox>
                        <Temp/>
                        <StyledSpan >
                              <StyledSpanMeter value={temp} temp={temp}/>
                        </StyledSpan>
                </IoTBox>
                <IoTBox>
                        <Plant/>
                        <StyledSpan >
                              <StyledSpanMeter value={temp} leak={leak}/>
                        </StyledSpan>
                </IoTBox>

            </InnerContainer>
        </HeroContainer>
    )
}

export default HeroSection
