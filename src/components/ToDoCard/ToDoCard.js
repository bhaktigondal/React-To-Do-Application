
import React from 'react';
import './ToDoCard.css';

function ToDoCard({ todoItem }) {
    return (
        <div className='to-do-card'>
            {todoItem}
        </div>
    );
}

export default ToDoCard;
