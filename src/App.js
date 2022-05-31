import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import React, { useState, useEffect } from 'react';
import { AddTodo } from './MyComponents/AddTodo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {About} from './MyComponents/About';
function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.getItem('todos', JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log('adding this todo', title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <div >
      <Router>
        <Header title="My Todos List" searchbar={true} />
        <div className='conatiner'>
        <Switch>
          <Route exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        </div>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
