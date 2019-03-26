import React, { useState } from "react";

function Todo(todo, index) {
  return <div className="todo">{todo.text}</div>;
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about react",
      isComplete: false
    },
    {
      text: "Meet friend for lunch",
      isComplete: false
    },
    {
      text: "Build really cool todo app",
      isComplete: false
    }
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
