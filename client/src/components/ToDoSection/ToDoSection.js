import React from 'react'
import {ToDoOverlay, ToDoContainer, ToDoBackgroundVideo, ToDoOverLay} from './ToDoElements';
import Snow from '../../resources/Snow.mp4';

const ToDoSection = () => {
    return (
        <ToDoContainer id="todo">
        <ToDoOverLay/>
        <ToDoBackgroundVideo src={Snow} autoPlay muted/>
        </ToDoContainer>
    )
}

export default ToDoSection
