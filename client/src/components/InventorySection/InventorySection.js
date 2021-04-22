import React, {useState, useEffect} from 'react'
import { InventorySectionContainer, InputWrapperInventory, 
BottomContainer, GroceryHeader, GroceryInput, GroceryContainer, GroceryNote,
StyledParagraph,Button, InputContainer, InputBox, ResultContainer, ResultText, GroceryListButton, ButtonContainer
} 
from './InventorySectionElements'
import pantry from '../../resources/pantry1.jpg';





const InventorySection = () => {
    const [showGroceries, setShowGroceries] = useState(false);
    const [grocery, setGrocery] = useState();
    const [groceryList, setGroceryList] = useState(['Äpple', 'Päron', 'Havregryn', 'Mjölk']);
    const [result, setResult] = useState();

    useEffect(()=>{
        renderData();
        console.log('I RAN')
    },[groceryList])

    const addGrocery = ()=>{
        setGroceryList([...groceryList, grocery]);
        console.log(groceryList);
    }

    const handleGroceryInput = (e)=>{
       setGrocery(e.target.value);
    }

    const searchGrocery = ()=>{
        if(groceryList.includes(grocery)){
            setResult(true)
        }else{
            setResult(false)
        }
     }

    const handleGroceryList = ()=>{
        if(showGroceries){
            setShowGroceries(false)
        }else {
            setShowGroceries(true);
        }
    }
    
    const renderData = ()=>{
        return groceryList.map(item =>{
            return <GroceryNote><StyledParagraph>{item}</StyledParagraph></GroceryNote>
        })
    }

    return (
        <InventorySectionContainer id="inventory">
        <InputWrapperInventory img={pantry}>
        <ButtonContainer>
        <GroceryListButton onClick={handleGroceryList}>See All Groceries</GroceryListButton>
        </ButtonContainer>
        <InputContainer>
        <InputBox>
        <GroceryHeader>Add Grocery</GroceryHeader>
        <GroceryInput onChange={handleGroceryInput}/>
        <Button onClick={addGrocery}>Add</Button>
        </InputBox>

        <InputBox>
        <GroceryHeader>Search Grocery</GroceryHeader>
        <GroceryInput onChange={handleGroceryInput}/>
        <Button onClick={searchGrocery}>Search</Button>
        </InputBox>
        <ResultContainer>
        <ResultText inStock={result}>{result ? 'In Stock' : 'Not In Stock'}</ResultText>
        </ResultContainer>
        </InputContainer>
        </InputWrapperInventory>
        <BottomContainer>
            <GroceryContainer open={showGroceries}>
                {renderData()}
            </GroceryContainer>
        </BottomContainer>

        </InventorySectionContainer>
    )
}

export default InventorySection
