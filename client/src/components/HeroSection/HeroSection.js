import React, { useState, useEffect } from 'react'
import { HeroContainer, StyledSpanMeter, IotButton, IotList, IotLinkContainer ,StyledSpan, Plant, PlantRuler, TempRuler, LeakRuler ,Temp, HeroHeader, InnerContainer, InnerContainerTop,OverLay, IoTBox, Overlay } from './HeroSectionElements';
import forest from '../../resources/forest2.jpg';
import Axios from 'axios';


const HeroSection = () => {
    const [flowerValue, setFlowerValue] = useState();

    const getIotData = async () =>{
        const resp = await Axios.get("http://localhost:4000/iot");
        setFlowerValue(resp.data[0].flower);
    }

    useEffect(()=>{
        getIotData();
        console.log('I RAN')
    }, [])

    const moist = 10;
    const temp = 30;
    const leak = 90;
    return (
        <HeroContainer id="home">

                    <InnerContainerTop img={forest}>
                        {/* <OverLay showIoT={true}/> */}
                        <IotLinkContainer>

                        </IotLinkContainer>
                    </InnerContainerTop>
                    <InnerContainer>
                <IoTBox>
                <Plant onClick={getIotData} />
                <StyledSpan >
                    <StyledSpanMeter value={flowerValue} moist={flowerValue}/>
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
