import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    fetch("https://sleepy-bayou-07140.herokuapp.com/todo/")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);
  return (
    <table className="table flex justify-center mx-auto">
      <thead></thead>
      <tbody>
        {todos.map((todo, index) => (
          <Todo todos={todos} index={index} setTodo={setTodo} todo={todo} key={todo._id} />
        ))}
      </tbody>
    </table>
  );
};

export default Todos;
