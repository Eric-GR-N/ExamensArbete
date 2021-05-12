import React, { useState, useEffect } from 'react'
import { HeroContainer, StyledSpanMeter, StyledSpan,
Temp, InnerContainer, InnerContainerTop, 
IoTBox, Overlay, IoTWrapper, IoTText, IoTTextWrapper,GetText, IoTInfoBox, Flower, BoxText, Drop } from './HeroSectionElements';
import forest from '../../resources/forest2.jpg';
import Axios from 'axios';
import emailjs from 'emailjs-com';

const HeroSection = () => {
    const [flowerValue, setFlowerValue] = useState();
    const [tempValue, setTempValue] = useState();
    const [dropValue, setDropValue] = useState(true);
    const [showIoT, setShowIoT] = useState(false);
    const [type, setType] = useState();
    const [tempMessage, setTempMessage] = useState();
    const [mailSent, setMailSent] = useState(false);

    //Fetches our iot data when page loads
    useEffect(() => {
        getIotData();
    }, [])

        //Sends an email if the flower value is too low
        const sendMail = (mailMessage) => {
        var templateParams = {
            message: mailMessage,
        };

        emailjs.send('gmail', 'template_4qpml08', templateParams ,'user_hMExUOMfI9Ct0t1FC2ou6')
          .then((result) => {
              console.log(result.text);
              setMailSent(true);
          }, (error) => {
              console.log(error);
          });
      }

    //Messages to display for the iot boxes
    const IoTDoc = {
        plant: 'Till vänster kan vi se hur blomman mår. Visar mätaren rött så är det dags att vattna',
        temp: tempMessage,
        leakage: 'Till vänster kan vi se om vi har ett eventuellt läckage i lägenheten. Är droppen blå så är det en indikation på att det är vatten på golvet'
    }

    //Closes the IoT box when not active 
    useEffect(()=>{
        if(type){
            setShowIoT(true);
        }
    }, [type])

    //Function to get our sensor values from the database
    const getIotData = async () =>{
        const resp = await Axios.get("http://localhost:4000/iot");
        setFlowerValue((resp.data[0].flower/11));
        setTempValue(resp.data[0].temp);
        setDropValue(resp.data[0].leak > 100 ? true : false);

        if(flowerValue < 40){
            if(!mailSent){
                sendMail(`Jag behöver vattnas :)\n\n/Hjördis`);
                setMailSent(true);
            }
        }else{
            setMailSent(false);
        }

        if(tempValue){
            if(tempValue>50 || tempValue < 5){
                setTempMessage(tempValue > 45 ? `Temperaturen är nu ${tempValue} grader celcius. Det innebär att temperaturen är ovanligt hög och vi kanske har en brand i hemmet` : `Temperaturen är ${tempValue}. Det innebär att temperaturen är ovanligt låg och vi kanske bör stänga fönster och kontrollera elementen`);
                sendMail(`Temperaturen i lägenheten är nu ${tempValue} grader celcius, vilket tyder på att något är fel. Kolla genast upp vad det kan bero på`);
            }else{
                setTempMessage(`Temperaturen är nu ${tempValue} grader celcius. Det innebär att temperaturen i hemmet inte indikerar några problem`);
            }
        }
    }

    const closeMenu = () =>{
        setShowIoT(false);
    }

    //Displays the IoT Boxes
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

    //Open/Close the IoT Menues
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
           <BoxText>Bevattning</BoxText>
       </IoTBox>
       <IoTBox onClick={e => handleIoTMenu(e)}>
           <GetText>
               temp
           </GetText>
           <Temp highlight={showIoT} type={type}/>
           <BoxText>Temperatur</BoxText>
       </IoTBox>
       <IoTBox onClick={e => handleIoTMenu(e)}>
           <GetText>
               drop
           </GetText>
           <Drop highlight={showIoT} type={type}/>
           <BoxText>Läckage</BoxText>
       </IoTBox>
        </InnerContainer>
        </HeroContainer>
    )
}

export default HeroSection
