import React, { useState, useEffect } from 'react'
import { HeroContainer, StyledSpanMeter, StyledSpan, Plant,
Temp, HeroHeader, InnerContainer, InnerContainerTop, 
IoTBox, Overlay, IoTWrapper, IoTText, IoTTextWrapper,GetText, IoTInfoBox, Flower, BoxText, Drop } from './HeroSectionElements';
import forest from '../../resources/forest2.jpg';
import Axios from 'axios';
import {colors} from '../../colors';

const HeroSection = () => {
    const [flowerValue, setFlowerValue] = useState();
    const [tempValue, setTempValue] = useState();
    const [dropValue, setDropValue] = useState(true);
    const [showIoT, setShowIoT] = useState(false);
    const [type, setType] = useState();
    const [tempMessage, setTempMessage] = useState();

    useEffect(() => {
        getIotData();
    }, [])

    const IoTDoc = {
        plant: 'Till vänster kan vi se om blomman mår. Visar mätaren rött så är det dags att vattna',
        temp: tempMessage,
        leakage: 'Till vänster kan vi se om vi har ett eventuellt läckage i lägenheten. Är droppen blå så är det en indikation på att det är vatten på golvet'
    }

    useEffect(()=>{
        if(type){
            setShowIoT(true);
        }
    }, [type])

    const getIotData = async () =>{
        const resp = await Axios.get("http://localhost:4000/iot");
        setFlowerValue((resp.data[0].flower/5));
        setTempValue(resp.data[0].temp);
        setDropValue(resp.data[0].flower > 430 ? false : true);

        if(tempValue){
            if(tempValue>50 || tempValue < 5){
                setTempMessage(tempValue > 50 ? `Temperaturen är ${tempValue}. Det innebär att temperaturen är ovanligt hög och vi kanske har en brand i hemmet` : `Temperaturen är ${tempValue}. Det innebär att temperaturen är ovanligt låg och vi kanske bör stänga fönster och kontrollera elementen`);
            }else{
                setTempMessage(`Temperaturen är ${tempValue}. Det innebär att temperaturen i hemmet inte indikerar några problem`);
            }
        }
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
                    <Drop leak={dropValue}/>
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
