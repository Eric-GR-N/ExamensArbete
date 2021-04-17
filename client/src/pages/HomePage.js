import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection/HeroSection';
import InventorySection from '../components/InventorySection/InventorySection';
import NavBar from '../components/NavBar/NavBar';
import ToDoSection from '../components/ToDoSection/ToDoSection'

const HomePage = () => {
    return (
        <>
        <NavBar/>
        <HeroSection/>
        <ToDoSection />
        <InventorySection/>
        </>
    )
}

export default HomePage
