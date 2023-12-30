
import React from 'react';
import './App.css'
import Addtodo from './components/Addtodo';
import Todos from './components/Todos';

function App() {

  return (
   <>
    <h1 className="text-center text-3xl font-bold">TODO APP</h1>
    <Addtodo/>
    <Todos/>
   </>
  )
}

export default App
