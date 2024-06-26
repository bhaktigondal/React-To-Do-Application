import React, { useState } from 'react';
import "./Home.css";
import addIcon from "./add.png";
import ToDoCard from '../../components/ToDoCard/ToDoCard';
// import { useState } from 'react';
import toast,{Toaster} from 'react-hot-toast';

function Home() {
    // const todoList = [
    //     "go to market",
    //     "go to gym",
    //     "buy groceries",
    //     "shopping",
    //     "go to market",
    //     "go to gym",
    //     "buy groceries",
    //     "shopping",
    //     "go to market",
    //     "go to gym",
    //     "buy groceries",
    //     "shopping"
    // ];
    const [todoList , setTodoList]=useState([
        
    ])
    const [newTask, setNewTask] = useState("");
  
    return (
        <div>
            <h1 className='app-title'>To Do Application 📝</h1>
            <div className='to-do-list-container'>
               {
                todoList.map((todoItem, i) => <ToDoCard key={i} todoItem={todoItem} />)
               }
               {
                todoList.length===0 ?
                <p style={{textAlign:"center"}}>no task to added,please add new task</p>
                :
                null
               }
              
            </div>
            <div className='to-do-item-container'>
                <input type='text' 
                placeholder='Add New Task'
                 className='add-input' 
                 value={newTask} 
                 onChange={(e) => setNewTask(e.target.value)}/>
                 <img 
                    src={addIcon} 
                    className='add-icon' 
                    alt="Add" 
                    onClick={
                        ()=>{
                            if(  newTask==="")
                              
                             {
                                toast.error("task cannot ne empty")
                                return
                            }
                            setTodoList([...todoList, newTask]);
                            setNewTask(""); 
                            toast.success("task added succesfully")
                        }
                    }
                />
            </div>
            <Toaster position='top-right'/>
        </div>
    );
}

export default Home;
