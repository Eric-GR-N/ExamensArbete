import React from 'react'
import { HeroContainer, HeroBackgroundVideo, HeroContent, Overlay, OverLay } from './HeroSectionElements';
import styled from 'styled-components';
import Forest from '../../resources/Forest1.mp4';

const HeroSection = () => {
    return (
        <>
        <HeroContainer>
            <OverLay />
            <HeroBackgroundVideo src={Forest} autoPlay muted/>
            <HeroContent>Home</HeroContent>
        </HeroContainer>
        </>
    )
}

export default HeroSection
