import React from 'react'
import styled, {css} from 'styled-components';
import {colors} from '../../colors';
import orchid from '../../resources/orchid3.jpg';
import sky from '../../resources/Sky1.jpg';
import { RiPlantFill } from 'react-icons/ri';
import {RiTempColdLine} from 'react-icons/ri';


export const HeroContainer = styled.div`
height: 760px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
flex-direction: column;
`

export const InnerContainer = styled.div`
top: 60%;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 40%;
position: absolute;
`
export const InnerContainerTop = styled.div`
top: 0;
${props => css`
background-image: url(${props.img})
`};
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 60%;
position: absolute;
`

export const IoTBox = styled.div`
display: flex;
width: 150px;
height: 120px;
margin: 0 20px 11px 20px;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
`

export const Plant = styled(RiPlantFill)`
color: #144a10;
width: 60%;
height: 60%;
position: absolute;
cursor: pointer
`

export const Temp = styled(RiTempColdLine)`
color: grey;
width: 40%;
height: 40%;
position: absolute;
`

export const StyledSpan = styled.span`
border: solid #d2d4d2 2px;
border-radius: 6px;
width: 100%;
height: 9%;
bottom: 0;
position: absolute;
overflow: hidden;
`


export const StyledSpanMeter = styled.div`
height: 100%;
background-color: ${props => props.value < 30 ? colors.red : colors.darkGreen};
${props => props.moist && css`
width: ${props.moist}%;
`}
${props => props.temp && css`
width: ${props.temp}%;
`}
${props => props.leak && css`
width: ${props.leak}%;
`}
`


export const Overlay = styled.div`
width: 100%;
height: 100%;
position: absolute;
background-color: rgba(0,0,0,1);
opacity: ${props => props.opacity ? 1 : 0};
transition: opacity 1s ease-in;
`;


export const HeroHeader = styled.h1`
color: black;
font-weight: bold;
font-size: 3rem;
align-self: flex-start;
position: absolute;
`

export const IotLinkContainer = styled.div`
top: 0;
height: 80px;
width: 100%;
position: absolute;
display: flex;
justify-content: flex-end;
align-items: center;
flex-wrap: wrap;
`

export const IoTMenu = styled.p`
color: white;
right: 50px;
position: absolute;
letter-spacing: 2px;
cursor: pointer;
z-index: 110;
`

export const IoTList = styled.ul`
z-index: 110;
top: 80px;
position: absolute;
display: flex;
flex-direction: column;
`

export const IoTItem = styled.li`
`

export const IoTLink = styled.p`
text-align: center;
color: white;
padding: 20px;
font-size: 0.9rem;
`
export const IoTTextWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 60%;
height: 90%;
${'' /* border: solid pink 2px; */}
position: relative;
margin-bottom: 11px;
`
export const IoTText = styled.p`
text-align: center;
position: absolute;
word-wrap: break-word;
line-height: 30px;
`

export const IoTWrapper = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
border: black 2px solid;
border-radius: 5px;
width: 40%;
height: 60%;
position: relative;
` 


