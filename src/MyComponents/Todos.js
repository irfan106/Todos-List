import React from 'react';
import { TodoItem } from './TodoItem';
export const Todos = (props) => {
  return (
    <div className="container py-3 todos">
      <h3 className="my-3 todol">Todos List</h3>
      <div >
      {props.todos.length === 0
        ? 'No todos to display...'
        : props.todos.map((todo) => {
            return <div className='todo'>
              <TodoItem todo={todo} onDelete={props.onDelete} />;
            </div>
          })}
      </div>
    </div>
  );
};
