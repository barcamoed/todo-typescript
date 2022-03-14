import React,{ChangeEvent, FC,useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './components/Item'
import { ITask } from './Interfaces';
import store from './store/store'
import {observer} from 'mobx-react'
import { DataGrid, GridColDef, GridValueGetterParams, } from '@mui/x-data-grid';
import { makeStyles } from "@mui/styles";
import { PanoramaSharp } from '@mui/icons-material';
import { NavLink } from "react-router-dom";
import DataGridTable from './components/DataGridTable';
import Header from './components/Header'
import AssetsPage from './Pages/Assets';
import FaultsPage from './Pages/Faults';




const App:FC =()=>{

  const [task,setTask] = useState<string>('');
  const [deadline,setDeadline] = useState<number>(0)
  const [todoList,setList] = useState<ITask[]>([]);

  const addTask=()=>{
    const newTaskObj = {task,deadline}
    console.log('Add newTaskObj Task',newTaskObj);
    // setList([...todoList,newTaskObj]);
    store.addTask(newTaskObj);
  }
  // useEffect(()=>{
  //   const tasksList = store.allTasks;
  // },[store.allTasks.length])



  return (
    <>

    <Header/>
    <div className="App">
    
      {/* <div className='header'>
        <div className='inputContainer'>
          <input type='text'  onChange={(e)=>setTask(e.target.value)} placeholder='Add task name'/>
          <input type='number'  onChange={(e:ChangeEvent<HTMLInputElement>)=>setDeadline(Number(e.target.value))} placeholder='Add task deadline'/>
        </div>
          <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todoList'>
        <h2> Task List</h2>
            {
            store.allTasks.length>0 &&
            store.allTasks.map((task:ITask)=>(
              <Item task={task} />
            ))}
      </div> */}
      
        {/* <DataGridTable rows={rows} mycolumns={columns}/> */}
        {/* <AssetsPage/> */}
        <FaultsPage/>

    </div>
    </>
  );
}

export default observer(App);
