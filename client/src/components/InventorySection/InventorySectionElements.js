import React from 'react'
import {HeroContainer } from '../HeroSection/HeroSectionElements';
import styled from 'styled-components'
import {Link} from 'react-scroll';
import img from '../../resources/uliana-kopanytsia_kitchen3.jpg'

export const InventorySectionContainer = styled(HeroContainer)`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat; 
`