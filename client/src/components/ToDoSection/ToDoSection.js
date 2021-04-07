import React, {useState, useEffect} from 'react'
import {ToDoContainer, ToDoOverLay, ToDoNotesWrapper, InputWrapper, StyledInput, StyledHeader, StyledNote, SubmitButton, StyledParaGraph, StyledSpan, StyledSelect, StyledOption, StyledListInput, StyledLabel} from './ToDoElements';
import styled from 'styled-components';
import Axios from "axios";

const ToDoSection = () => {

    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState();


    useEffect(()=>{
    console.log('I RAN');
    getData();
    },[])

    const getData = ()=>{
        console.log('GOT DATA')
        Axios.get("http://localhost:4000/todo").then((response)=>{
        setTaskList(response.data)
    })
    }

    const handleInput = (e)=>{
    const newTask = e.target.value;
    setTask(newTask);
    }

    const handleSubmit = ()=>{
        Axios.post("http://localhost:4000/tasks", {
            task: task
        })
        getData();
    }

    return (
        <ToDoContainer id="todo">
        <ToDoOverLay/>
        <InputWrapper>
        <StyledHeader>
        Something you want done? Write it!
        </StyledHeader>
        <StyledInput onChange={e => handleInput(e)}/>
        <StyledLabel for="dropdown">Deadline?</StyledLabel>
        <StyledSelect id="downtime">
            <StyledOption value="1">1 Day</StyledOption>
            <StyledOption value="2">2 Days</StyledOption>
            <StyledOption value="3">3 Days</StyledOption>
            <StyledOption value="4">4 Days</StyledOption>
            <StyledOption value="5">5 Days</StyledOption>
            <StyledOption value="6">6 Days</StyledOption>
            <StyledOption value="week">1 Week</StyledOption>
            <StyledOption value="2weeks">2 Weeks</StyledOption>
            <StyledOption value="3weeks">3 Weeks</StyledOption>
            <StyledOption value="month">1 Month</StyledOption>
        </StyledSelect>
        <SubmitButton onClick={handleSubmit}>
            Add Task
        </SubmitButton>
        </InputWrapper>
        <ToDoNotesWrapper>
        {taskList.map((val, index)=>{
           return <StyledNote key={index}><StyledParaGraph>{val.task}</StyledParaGraph><StyledSpan/></StyledNote>
        })}
        </ToDoNotesWrapper>
        </ToDoContainer>
    )
}

export default ToDoSection
