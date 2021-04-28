import React from 'react'
import styled, {css} from 'styled-components';
import {colors} from '../../colors';
import flower from '../../resources/rose.jpg';
import { RiPlantFill } from 'react-icons/ri';
import {FiSun} from 'react-icons/fi';
import {GiPlantWatering} from 'react-icons/gi'
import {BsDroplet} from 'react-icons/bs';


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

export const Flower = styled(GiPlantWatering)`
position: absolute;
width: 35%;
height: 35%;
z-index: -1;
${props => props.type === 'plant' && css`
color: ${props.highlight ? colors.lightGreen : 'black'};
transition: 0.2s ease-in-out;
width: ${props.highlight ? '37%' : '35%'};
height: ${props.highlight ? '37%' : '35%'};
`}
`

export const Drop = styled(BsDroplet)`
position: absolute;
width: 30%;
height: 30%;
z-index: -1;
${props => props.type === 'drop' && css`
color: ${props.highlight ? colors.lightBlue : 'black'};
transition: 0.2s ease-in-out;
width: ${props.highlight ? '32%' : '30%'};
height: ${props.highlight ? '32%' : '30%'};
`}
`

export const Temp = styled(FiSun)`
width: 30%;
height: 30%;
position: absolute;
z-index: -1;

${props => props.type === 'temp' && css`
color: ${props.highlight ? colors.yellow : 'black'};
transition: 0.2s ease-in-out;
width: ${props.highlight ? '32%' : '30%'};
height: ${props.highlight ? '32%' : '30%'};
`}

`

export const StyledSpan = styled.span`
border: solid #d2d4d2 2px;
border-radius: 6px;
width: 100%;
height: 9%;
bottom: 0;
position: absolute;
overflow: hidden;
z-index: -1;
`


export const StyledSpanMeter = styled.div`
z-index: -1;
height: 100%;
background-color: ${props => props.value < 30 ? colors.red : colors.lightGreen};
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
opacity: ${props => props.opacity ? 0.6 : 0};
transition: opacity 0.3s ease-in-out;
`;


export const HeroHeader = styled.h1`
color: black;
font-weight: bold;
font-size: 3rem;
align-self: flex-start;
position: absolute;
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
box-shadow: 5px 3px 10px -4px #9F9C9B;
background-color: white;
display: flex;
justify-content: flex-start;
align-items: center;
border-radius: 5px;
width: 40%;
height: 40%;
position: relative;
opacity: ${props => props.opacity ? 0.9 : 0};
transition: opacity 0.3s ease-in;
` 
export const IoTInfoBox = styled.div`
margin: 0 20px 11px 20px;
display: flex;
width: 150px;
height: 120px;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
`

export const GetText = styled.p`
position: absolute;
width: 100%;
height: 100%;
font-size: 0;
cursor: pointer;
z-index: 10;
`

export const IoTBox = styled.div`
background-color: white;
z-index: 10;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
border-radius: 25px;
background-size: cover;
background-repeat: no-repeat;
width: 12%;
height: 60%;
position: relative;
margin: 5%;
box-shadow: 5px 3px 10px -4px #9F9C9B;
`

export const BoxText = styled.p`
display: flex;
align-self: flex-end;
width: 100%;
height: 20%;
justify-content: center;
align-items: center;
z-index: -1;
`


