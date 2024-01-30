import './App.css';
import { useState } from 'react';
import { Input, List, Todo } from './todo';
import { Item } from './todo/Item';
function App() {
  const todosLocals = window.localStorage.getItem("todos")
  const [todos, setTodos] = useState(todosLocals ? JSON.parse(todosLocals) : [])
  const [read, setRead] = useState(true)
  return (
    <>

        
      <Todo />
      <Input todos={todos} setTodos={setTodos} />
      <List>
        {todos?.map(item => (
          <Item read={read} setRead={setRead} setTodos={setTodos} todos={todos} id={item.id} text={item.title} />
        ))}
      </List>




       
    </>
  );
}

export default App;
