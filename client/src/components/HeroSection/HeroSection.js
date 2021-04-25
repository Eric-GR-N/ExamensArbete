import React, { useState, useEffect } from 'react'
import { HeroContainer, StyledSpanMeter, IotList, 
IotLinkContainer ,StyledSpan, Plant, PlantRuler, TempRuler, LeakRuler ,
Temp, HeroHeader, InnerContainer, InnerContainerTop, 
OverLay, IoTBox, Overlay, IoTList, IoTItem, IoTLink, IoTMenu, IoTContainer, IoTWrapper, IoTText, IoTTextWrapper } from './HeroSectionElements';
import forest from '../../resources/forest2.jpg';
import Axios from 'axios';


const HeroSection = () => {
    const [flowerValue, setFlowerValue] = useState();
    const [showIoT, setShowIoT] = useState(false);
    const [opacity, setOpacity] = useState(0);

    const getIotData = async () =>{
        const resp = await Axios.get("http://localhost:4000/iot");
        setFlowerValue(resp.data[0].flower);
    }

    useEffect(()=>{
        getIotData();
        console.log('I RAN')
        renderTopContainer();
    }, [opacity])

    const renderTopContainer = ()=>{

        return (
        <InnerContainerTop img={forest} opacity={opacity}>
        <Overlay opacity={showIoT}/>
        <IotLinkContainer>
        <IoTMenu onClick={handleIoTMenu}>IOT</IoTMenu>
        <IoTList>
            <IoTItem>
                <IoTLink>
                    Flower
                </IoTLink>
            </IoTItem>
            <IoTItem>
                <IoTLink>
                    Temperature
                </IoTLink>
            </IoTItem>
            <IoTItem>
                <IoTLink>
                    Whatever
                </IoTLink>
            </IoTItem>
        </IoTList>
        </IotLinkContainer>
    </InnerContainerTop>
    )
    }


    const handleIoTMenu = ()=>{
        if(showIoT){
            setShowIoT(false)
        }else {
            setShowIoT(true);

        }
}

    const moist = 10;
    const temp = 30;
    const leak = 90;
    return (
        <HeroContainer id="home">

                    {renderTopContainer()}
                    <InnerContainer>
                    <IoTWrapper>
                <IoTBox>
                <Plant onClick={getIotData} />
                <StyledSpan >
                    <StyledSpanMeter value={flowerValue} moist={flowerValue}/>
                </StyledSpan>
        </IoTBox>
        <IoTTextWrapper>
                <IoTText>
                Pfourtz ! rucksack turpis, wie turpis bissame risus, 
                nüdle commodo wurscht eget Verdammi aliquam Richard 
                Schirmeck Yo dû. hopla quam, Hans sit Hein
                </IoTText>
                </IoTTextWrapper>
        </IoTWrapper>
        </InnerContainer>
        </HeroContainer>
    )
}

export default HeroSection
