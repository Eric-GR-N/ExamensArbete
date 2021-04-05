import React from 'react'
import {ToDoContainer, ToDoOverLay, ToDoNotesWrapper, InputWrapper, StyledInput, StyledHeader, StyledNote, SubmitButton} from './ToDoElements';
import styled from 'styled-components';


const ToDoSection = () => {

    const handleSubmit = () =>{
        window.alert('HELLO!');
    }
    return (
        <ToDoContainer id="todo">
        <ToDoOverLay/>
        <InputWrapper>
        <StyledHeader>
        Something you want done? Write it!
        </StyledHeader>
        <StyledInput/>
        </InputWrapper>
        <ToDoNotesWrapper>
            <StyledNote>
                <p>Clean The Kitchen</p>
            </StyledNote>
            <StyledNote/>
            <StyledNote/>
            <StyledNote/>
            <StyledNote/>
            <StyledNote/>
            <StyledNote/>
            <StyledNote/>
            <StyledNote/>
        </ToDoNotesWrapper>
        </ToDoContainer>
    )
}

export default ToDoSection
