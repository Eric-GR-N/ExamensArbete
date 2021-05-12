import React, {useState, useEffect} from 'react'
import { InventorySectionContainer, InputWrapperInventory, 
BottomContainer, GroceryHeader, GroceryInput, GroceryContainer, GroceryNote, OverLay,
StyledParagraph,Button, InputContainer, InputBox, ResultContainer, ResultText, GroceryListButton, ButtonContainer
} 
from './InventorySectionElements'
import pantry from '../../resources/pantry1.jpg';
import Axios from 'axios';





const InventorySection = () => {
    const [showGroceries, setShowGroceries] = useState(false);
    const [grocery, setGrocery] = useState();
    const [groceryList, setGroceryList] = useState([]);
    const [result, setResult] = useState();

    //Fetches our grocery data on startup
    useEffect(()=>{
        getData();
     }, [])

    //Re-renders data when groceryList changes
    useEffect(()=>{
        renderData();
        console.log('I RAN')
    },[groceryList])

    //Fetches our data from the database
    const getData = async () =>{
        const resp = await Axios.get("http://localhost:4000/groceries")
        console.log(resp.data);
        
        const newGroceryList = resp.data.map(obj=>{
            console.log(obj.grocery);
            return obj.grocery;
        });
        setGroceryList(newGroceryList);
    }


    const addGrocery = ()=>{
        if(grocery){
            Axios.post("http://localhost:4000/groceries", {
                grocery: grocery,
            }).then((response)=>{
                getData();
            })
        }
    }

    const handleGroceryInput = (e)=>{
       setGrocery(e.target.value);
    }

    const handleNoteClick = (e)=>{
        deleteData(e.target.textContent);
    }

    const deleteData = (grocery)=>{

        Axios.delete(`http://localhost:4000/deletegrocery/${grocery}`).then((response)=>{
            getData();
        })
    }

    const searchGrocery = ()=>{
        
        const upperCaseList = groceryList.map(item=>{
            return item.toUpperCase();
        })
        const upperCaseGrocery = grocery.toUpperCase();

        if(upperCaseList.includes(upperCaseGrocery)){
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
            return <GroceryNote><StyledParagraph onClick={e => handleNoteClick(e)}>{item}</StyledParagraph></GroceryNote>
        })
    }

    return (
        <InventorySectionContainer id="inventory">
        <InputWrapperInventory img={pantry}>
        <OverLay/>
        <ButtonContainer>
        <GroceryListButton onClick={handleGroceryList}>Göm/Visa Matvaror</GroceryListButton>
        </ButtonContainer>
        <InputContainer>
        <InputBox>
        <GroceryHeader>Lägg Till Matvara</GroceryHeader>
        <GroceryInput onChange={handleGroceryInput}/>
        <Button onClick={addGrocery}>Lägg till</Button>
        </InputBox>

        <InputBox>
        <GroceryHeader>Sök Matvara</GroceryHeader>
        <GroceryInput onChange={handleGroceryInput}/>
        <Button onClick={searchGrocery}>Sök</Button>
        </InputBox>
        <ResultContainer>
        <ResultText inStock={result}>{result ? 'Varan finns i lager' : 'Inte i lager'}</ResultText>
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
