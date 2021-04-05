import React, {useState, useEffect} from 'react'
import {ToDoContainer, ToDoOverLay, ToDoNotesWrapper, InputWrapper, StyledInput, StyledHeader, StyledNote, SubmitButton} from './ToDoElements';
import styled from 'styled-components';
import Axios from "axios";

const ToDoSection = () => {

    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState();

    useEffect(()=>{
    Axios.get("http://localhost:4000/todo").then((response)=>{
        setTaskList(response.data)
    })
    }, [taskList])

    const displayTasks = ()=>{

    }

    const handleInput = (e)=>{
    const newTask = e.target.value;
    setTask(newTask);
    }

    const handleSubmit = ()=>{
        Axios.post("http://localhost:4000/tasks", {
            task: task
        })
    }

    return (
        <ToDoContainer id="todo">
        <ToDoOverLay/>
        <InputWrapper>
        <StyledHeader>
        Something you want done? Write it!
        </StyledHeader>
        <StyledInput onChange={e => handleInput(e)}/>
        <SubmitButton onClick={handleSubmit}>
            Add Task
        </SubmitButton>
        </InputWrapper>
        <ToDoNotesWrapper>
        {taskList.map((val, index)=>{
           return <StyledNote key={index}><p>{val.task}</p></StyledNote>
        })}
        </ToDoNotesWrapper>
        </ToDoContainer>
    )
}

export default ToDoSection
