import React, {useState, useEffect} from 'react'
import {
ToDoContainer, ToDoOverLay, ToDoNotesWrapper, InputWrapper, 
StyledInput, StyledHeader, StyledNote, SubmitButton, 
StyledParaGraph, StyledSpan, StyledSelect, StyledOption, 
StyledLabel, StyledHoverText} from './ToDoElements';
import Axios from "axios";
import emailjs from 'emailjs-com';
import todo from '../../resources/todo2.jpg';
import { InnerContainer } from '../HeroSection/HeroSectionElements';

const ToDoSection = () => {

    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState();

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
        Axios.put("http://localhost:4000/updatestatus", { task: task}).then((response)=>{
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

    const handleSubmit = ()=>{
        Axios.post("http://localhost:4000/tasks", {
            task: task,
        }).then((response)=>{
            setData();
        })
    }

    const renderData = ()=>{
        return taskList.map((val, index)=>{
            return <StyledNote key={index}>
            <StyledParaGraph onClick={e =>handleNoteClick(e)}>{val.task}</StyledParaGraph>
            </StyledNote>
         })
    }

    return (
        <ToDoContainer id="todo">
        <InputWrapper img={todo}>
        <StyledHeader>
        Something you want done? Write it!
        </StyledHeader>
        <StyledInput onChange={e => handleInput(e)}/>
        <SubmitButton onClick={handleSubmit}>
            Add Task
        </SubmitButton>
        </InputWrapper>
        <InnerContainer>
        <ToDoNotesWrapper>
        {renderData()}
        </ToDoNotesWrapper>
        </InnerContainer>
        </ToDoContainer>
    )
}

export default ToDoSection
