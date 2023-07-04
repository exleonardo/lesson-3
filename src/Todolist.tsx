import React, {ChangeEvent, KeyboardEvent, MouseEvent, useState} from "react";
import {FilterValuesType} from './App';
import Button from "./components/Button";

type TaskType = {
    id: string
    title: string
    isDone: boolean

}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask:(inputTitle:string)=>void
}

export function Todolist(props: PropsType) {


const onClickButtonHandler  = ()=>{
    props.addTask(inputTitle)
    setInputTitile("")

}
const [inputTitle, setInputTitile]=useState("")
const onInputHandler = (e:ChangeEvent<HTMLInputElement>)=>{
    setInputTitile(e.currentTarget.value)
}
const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>)=>{
    if(e.key==="Enter"){
        props.addTask(inputTitle)
        setInputTitile("")
    }
}

const changeFilter = (val:FilterValuesType)=>{
    props.changeFilter(val)
}

    const removeTaskHandler =(tID:string)=>{
        props.removeTask(tID)
    }
const mappedTask = ()=> {
  return  (props.tasks.map(t => {

        return (
          <li key={t.id}>
              <input type="checkbox" checked={t.isDone}/>
              <span>{t.title}</span>
              <Button name={"x"} callBack={()=>removeTaskHandler(t.id)}/>
          </li>
        )
    } ))
}
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input onKeyPress={onKeyPressHandler} value={inputTitle} onChange={onInputHandler} />
            <button onClick={onClickButtonHandler}>+</button>
        </div>
        <ul>
            {mappedTask()}
        </ul>
        <div>
            <Button name={"All"} callBack={()=>changeFilter('all')} />
            <Button name={"active"} callBack={()=>changeFilter('active')} />
            <Button name={"completed"} callBack={()=>changeFilter('completed')} />
        </div>
    </div>
}
