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
    const [downtime, addToDownTime] = useState([]);


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

        newTaskList.map(obj=>{
            if(obj.deadline === 'Passed' && obj.reminder !== 'Sent'){
                    Axios.put("http://localhost:4000/updatereminder", { task: task, reminder: 'Sent'}).then((response)=>{
                        window.alert(`TASK: ${obj.task} is still not finished!`);
                    })
            }
        })

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

    const handleSelect = (e)=>{
        const newDeadline = e.target.value;
        setDeadline(newDeadline);
    }

    const handleSubmit = ()=>{
        setDownTimeHours(deadline);
        Axios.post("http://localhost:4000/tasks", {
            task: task,
            deadline: deadline
        }).then((response)=>{
            setData();
        })
    }

    const handleMissedDeadline = (endtime)=>{
       const deadlineItem =  setTimeout(()=>{
            Axios.put("http://localhost:4000/updatedeadline", { deadline: 'Passed', task: task, }).then((response)=>{
                setData();
            })
        }, (endtime))
        addToDownTime([...downtime, deadlineItem]);
    }

    const setDownTimeHours = (deadline)=>{
        const dayInMilliseconds = (3600000*24);

        switch(deadline){
            case '1 day':
                handleMissedDeadline(dayInMilliseconds);
                break;
            case '2 days':
                handleMissedDeadline(dayInMilliseconds*2);
                break;
            case '3 days':
                handleMissedDeadline(dayInMilliseconds*3);
                break;
            case '4 days':
                handleMissedDeadline(dayInMilliseconds*4);
                break;
            case '5 days':
                handleMissedDeadline(dayInMilliseconds*5);
                break;
            case '6 days':
                handleMissedDeadline(dayInMilliseconds*6);
                break;
            case '1 week':
                handleMissedDeadline(dayInMilliseconds*7);
                break;
            case '2 weeks':
                handleMissedDeadline(dayInMilliseconds*14);
                break;
            case '3 weeks':
                handleMissedDeadline(dayInMilliseconds*21);
                break;
            case '1 month':
                handleMissedDeadline(dayInMilliseconds*30);
                break;
        }
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
