import React, {useState, useEffect} from 'react'
import {
ToDoContainer, ToDoOverLay, ToDoNotesWrapper, InputWrapper, 
StyledInput, StyledHeader, StyledNote, SubmitButton, 
StyledParaGraph, StyledSpan, StyledSelect, StyledOption, 
StyledLabel, StyledHoverText} from './ToDoElements';
import Axios from "axios";

const ToDoSection = () => {

    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState();
    const [deadline, setDeadline] = useState('1 day');

    useEffect(()=>{
        renderData()
        console.log('I RAN')
    }, [taskList])

    useEffect(()=>{
       setData();
    }, [])

    const setData = async () =>{
        const resp = await Axios.get("http://localhost:4000/todo")
        const newTaskList = resp.data.filter(obj=>{
            return obj.status !== 'DONE';
        });
        setTaskList(newTaskList);
    }

    const deleteData = (task)=>{
        Axios.put("http://localhost:4000/update", { task: task}).then((response)=>{
            setData();
        })
    }

    const handleNoteClick = (e)=>{
        deleteData(e.target.textContent);
    }

    const handleInput = (e)=>{
        const newTask = e.target.value;
        setTask(newTask);
    }

    const handleSelect = (e)=>{
        const newDeadline = e.target.value;
        setDeadline(newDeadline);
    }

    const handleSubmit = ()=>{
        console.log(deadline);
        Axios.post("http://localhost:4000/tasks", {
            task: task,
            deadline: deadline
        }).then((response)=>{
            setData();
        })
    }

    const renderData = ()=>{
        return taskList.map((val, index)=>{
            return <StyledNote key={index}>
            <StyledParaGraph onClick={e =>handleNoteClick(e)}>{val.task}</StyledParaGraph>
            <StyledSpan>
            <StyledHoverText>Done? Click!</StyledHoverText>
            </StyledSpan>
            </StyledNote>
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
        <StyledLabel for="dropdown">Deadline?</StyledLabel>
        <StyledSelect id="downtime" onChange={e=>{handleSelect(e)}}>
            <StyledOption value="1 day">1 Day</StyledOption>
            <StyledOption value="2 days">2 Days</StyledOption>
            <StyledOption value="3 days">3 Days</StyledOption>
            <StyledOption value="4 days">4 Days</StyledOption>
            <StyledOption value="5 days">5 Days</StyledOption>
            <StyledOption value="6 days">6 Days</StyledOption>
            <StyledOption value="1 week">1 Week</StyledOption>
            <StyledOption value="2 weeks">2 Weeks</StyledOption>
            <StyledOption value="3 weeks">3 Weeks</StyledOption>
            <StyledOption value="1 month">1 Month</StyledOption>
        </StyledSelect>
        <SubmitButton onClick={handleSubmit}>
            Add Task
        </SubmitButton>
        </InputWrapper>
        <ToDoNotesWrapper>
        {renderData()}
        </ToDoNotesWrapper>
        </ToDoContainer>
    )
}

export default ToDoSection
