import React from 'react'
import { InventorySectionContainer, InputWrapperInventory, BottomContainer } from './InventorySectionElements'
import kitchen from '../../resources/kitchen.jpg';

const InventorySection = () => {
    return (
        <InventorySectionContainer id="inventory">
        <InputWrapperInventory img={kitchen}>

        </InputWrapperInventory>
        <BottomContainer>

        </BottomContainer>

        </InventorySectionContainer>
    )
}

export default InventorySection
