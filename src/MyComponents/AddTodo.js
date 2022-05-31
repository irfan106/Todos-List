import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        }
        else{
        addTodo(title,desc);
        setdesc("");
        settitle("");
        }
    }
  return (
    <div className='container my-3 addtodo'>
        <h3> Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="htmlForm-label">
            Todo Title : 
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=>{settitle(e.target.value)}}
            className="htmlForm-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="htmlForm-label">
            Todo Description : 
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e)=>{setdesc(e.target.value)}}
            className="htmlForm-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">
          Add Todo
        </button>
      </form>
    </div>
  );
};
