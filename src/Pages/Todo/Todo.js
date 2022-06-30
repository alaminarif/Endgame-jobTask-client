import React, { useEffect, useState } from "react";

const Todo = ({ todo, todos, setTodo }) => {
  // const [todos, settodo] = useState([]);

  const handleDelete = (id) => {
    const procced = window.confirm("are you sure?");
    if (procced) {
      const url = `http://localhost:5000/todo/${id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = todos.filter((todo) => todo._id !== id);
          setTodo(remaining);
          console.log(data);
        });
    }
  };
  console.log(todo);
  return (
    <div class=" w-4/12 mx-auto">
      <label class="cursor-pointer">
        <span class="label-text mr-6">{todo.name}</span>
        <input type="checkbox" class="checkbox checkbox-primary checkbox-xs" />
        <button className="text-primary ml-2">Edit</button>
        <button className="text-primary ml-2" onClick={() => handleDelete(todo._id)}>
          delete
        </button>
      </label>
    </div>
  );
};

export default Todo;
