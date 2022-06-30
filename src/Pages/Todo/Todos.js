import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/todo/")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo._id} />
      ))}
    </div>
  );
};

export default Todos;
