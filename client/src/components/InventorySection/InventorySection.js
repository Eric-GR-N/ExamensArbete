import React from 'react'
import { InventorySectionContainer, InputWrapperInventory, 
BottomContainer, GroceryHeader, GroceryInput, GroceryContainer, GroceryNote,
StyledParagraph 
} from './InventorySectionElements'
import pantry from '../../resources/pantry1.jpg';

const groceries = ['Gurka', 'Tomat', 'Selleri', 'Curry'];



const InventorySection = () => {

    const handleGrocery = (e)=>{
        console.log(e.target.textContent);
    }
    
    const renderData = ()=>{
        return groceries.map(item =>{
            return <GroceryNote onClick={e => handleGrocery(e)}><StyledParagraph>{item}</StyledParagraph></GroceryNote>
        })
    }

    return (
        <InventorySectionContainer id="inventory">
        <InputWrapperInventory img={pantry}>
        <GroceryHeader>Add Grocery</GroceryHeader>
        <GroceryInput />

        </InputWrapperInventory>
        <BottomContainer>
            <GroceryContainer>
                {renderData()}
            </GroceryContainer>
        </BottomContainer>

        </InventorySectionContainer>
    )
}

export default InventorySection
