import React from 'react'
import {ToDoOverlay, ToDoContainer, ToDoOverLay, InputWrapper, StyledInput, StyledHeader} from './ToDoElements';
import styled from 'styled-components';


const ToDoSection = () => {
    return (
        <ToDoContainer id="todo">
        <ToDoOverLay/>
        <InputWrapper>
        <StyledHeader>
        Something you want done? Write it!
        </StyledHeader>
        <StyledInput/>
        </InputWrapper>
        </ToDoContainer>
    )
}

export default ToDoSection
