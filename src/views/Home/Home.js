import React from 'react';
import "./Home.css";
import addIcon from "./add.png";

function Home() {
    const todoList = [
        "go to market",
        "go to gym",
        "buy groceries",
        "shopping"
    ];
  
    return (
        <div>
            <h1 className='app-title'>To Do Application 📝</h1>
            <div className='to-do-list-container'>
               {
                todoList.map((todoItem, i) => {
                    return (
                        <div key={i}>
                            {todoItem}
                        </div>
                    );
                })
               }
            </div>
            <div className='to-do-item-container'>
                <input type='text' placeholder='Add New Task' className='add-input'/>
                <img src={addIcon} className='add-icon' alt="Add"/>
            </div>
        </div>
    );
}

export default Home;
