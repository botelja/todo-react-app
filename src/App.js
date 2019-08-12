import React from 'react';
import './App.css';

function generateId() {
  return Math.random()
    .toString(36)
    .substr(2, 9);
}

function App() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState('');

  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId()
      })
    );
    setInput('');
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="App">
      <input
        type="text"
        value={input}
        placeholder="New Todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
