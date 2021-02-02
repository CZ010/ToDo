import React from 'react';

function ListItem({onDelete, onToggle, todo}) {
    console.log('render', todo.title, todo.id)

    return (
      <li className="list-item">
        <span className='list-item-text'>
          <input
            className='list-item-checkbox'
            id={`todo-checkbox${todo.id}`} 
            type='checkbox' onChange={() => onToggle(todo.id)}
          />
        <label 
          className={todo.completed ? 'done' : ''} 
          htmlFor={`todo-checkbox${todo.id}`} 
        >
          {todo.title}&#160;
        </label>
        </span>
        
        <button className='list-item-btn' onClick={() => onDelete(todo.id)}>&#10006;</button>
      </li>
    )
  }

export default ListItem;