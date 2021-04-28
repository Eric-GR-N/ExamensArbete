import React, { useState, useEffect } from 'react'
import { HeroContainer, StyledSpanMeter, StyledSpan, Plant,
Temp, HeroHeader, InnerContainer, InnerContainerTop, 
IoTBox, Overlay, IoTWrapper, IoTText, IoTTextWrapper,GetText, IoTInfoBox, Flower, BoxText, Drop } from './HeroSectionElements';
import forest from '../../resources/forest2.jpg';
import Axios from 'axios';
import {colors} from '../../colors';

const HeroSection = () => {
    const [flowerValue, setFlowerValue] = useState();
    const [tempValue, setTempValue] = useState(29);
    const [showIoT, setShowIoT] = useState(false);
    const [type, setType] = useState();
    const [flowerHighLight, setFlowerHighLight] = useState(false);
    const [tempHighLight, setTempHighLight] = useState(false);
    const [dropHighLight, setDropHighLight] = useState(false);

    const IoTDoc = {
        plant: 'On the meter to the left we can see flower\'s need for water. The sensor measures the dryness of the soil',
        temp: 'On the meter to the left we can see the temperature around the flower',
        leakage: 'On the meter to the left we can see if we have encountered a leakage'
    }

    useEffect(()=>{
        if(type){
            setShowIoT(true);
        }

    }, [type])

    const getIotData = async () =>{
        const resp = await Axios.get("http://localhost:4000/iot");
        setFlowerValue(resp.data[0].flower);
        setTempValue(resp.data[0].temp);
    }

    const closeMenu = () =>{
        setShowIoT(false);
    }

    const renderIoTFacts = ()=>{
        if(type === 'plant'){
            return(
                <IoTWrapper opacity={showIoT}>
                <IoTInfoBox>
                    <Flower />
                    <StyledSpan>
                        <StyledSpanMeter value={flowerValue} moist={flowerValue} />
                    </StyledSpan>
                </IoTInfoBox>
                <IoTTextWrapper>
                        <IoTText>
                            {IoTDoc.plant}
                        </IoTText>
                    </IoTTextWrapper>
                    </IoTWrapper>
            )
        }else if(type === 'temp'){
            return(
                <IoTWrapper opacity={showIoT}>
                <IoTInfoBox>
                    <Temp />
                    <StyledSpan>
                        <StyledSpanMeter value={tempValue} temp={tempValue} />
                    </StyledSpan>
                </IoTInfoBox>
                <IoTTextWrapper>
                        <IoTText>
                            {IoTDoc.temp}
                        </IoTText>
                    </IoTTextWrapper>
                    </IoTWrapper>
            )
        }else if(type === 'drop'){
            return(
                <IoTWrapper opacity={showIoT}>
                <IoTInfoBox>
                    <Drop />
                    <StyledSpan>
                        <StyledSpanMeter value={tempValue} temp={tempValue} />
                    </StyledSpan>
                </IoTInfoBox>
                <IoTTextWrapper>
                        <IoTText>
                            {IoTDoc.leakage}
                        </IoTText>
                    </IoTTextWrapper>
                    </IoTWrapper>
            )
        }

    }

    const handleIoTMenu = (e)=>{
        getIotData();
        setType(e.target.innerText);
        
        if(showIoT){
            setShowIoT(false)
        }else {
            setShowIoT(true);
        }
}

    return (
        <HeroContainer id="home">
        <InnerContainerTop img={forest}>
        <Overlay opacity={showIoT}/>
        {renderIoTFacts()}
    </InnerContainerTop>
       <InnerContainer>
       <IoTBox onClick={e => handleIoTMenu(e)}>
           <GetText>
               plant
           </GetText>
           <Flower highlight={showIoT} type={type}/>
           <BoxText>Flower Health</BoxText>
       </IoTBox>
       <IoTBox onClick={e => handleIoTMenu(e)}>
           <GetText>
               temp
           </GetText>
           <Temp highlight={showIoT} type={type}/>
           <BoxText>Temperature</BoxText>
       </IoTBox>
       <IoTBox onClick={e => handleIoTMenu(e)}>
           <GetText>
               drop
           </GetText>
           <Drop highlight={showIoT} type={type}/>
           <BoxText>Leakage</BoxText>
       </IoTBox>
        </InnerContainer>
        </HeroContainer>
    )
}

export default HeroSection
