import React, { useState } from "react";

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
}

export default App;
