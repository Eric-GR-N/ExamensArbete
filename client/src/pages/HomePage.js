import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection/HeroSection';
import NavBar from '../components/NavBar/NavBar';
import SafetySection from '../components/SafetySection/SafetySection';
import ToDoSection from '../components/ToDoSection/ToDoSection'

const HomePage = () => {
    return (
        <>
        <NavBar/>
        <HeroSection/>
        <ToDoSection />
        <SafetySection/>
        </>
    )
}

export default HomePage
