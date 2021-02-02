import React from 'react';
import ListItem from './ListItem';

function List(props) {
  return (
    <ul className='list'>
      {
        props.list.map((item, index) => 
          <ListItem 
            key={item.id} 
            onDelete={props.onDelete}
            onToggle={props.onToggle}
            todo={props.list[index]}
            // id={props.list[index].id} 
            // text={props.list[index].title}
            // completed={props.list[index].completed}
          />)
      }
    </ul>
  )
}

export default List;