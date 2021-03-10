import React from 'react'
import { HeroContainer, HeroVideoContainer, HeroBackgroundVideo, HeroContent, Overlay, OverLay } from './HeroSectionElements';
import styled from 'styled-components';
import Home from '../../resources/Home.mp4';

const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroVideoContainer>
                        <OverLay />
                        <HeroBackgroundVideo src={Home} autoPlay muted/>
            </HeroVideoContainer>
        </HeroContainer>
    )
}

export default HeroSection
