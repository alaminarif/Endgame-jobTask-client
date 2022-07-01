import React, { useEffect, useState } from "react";
import { FaPen, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Todo = ({ todo, todos, setTodo, index }) => {
  // const [todos, settodo] = useState([]);

  // delte
  const handleDelete = (id) => {
    const procced = window.confirm("are you sure?");
    if (procced) {
      const url = `https://sleepy-bayou-07140.herokuapp.com/todo/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = todos.filter((todo) => todo._id !== id);
          setTodo(remaining);
          console.log(data);
          toast.success("delete successfull");
        });
    }
  };

  // update

  return (
    <tr class=" ">
      <td>{index + 1}</td>
      <label class=" cursor-pointer">
        <td className="w-full">
          <span class="label-text mr-6">{todo.name}</span>
        </td>
        <td>
          <input type="checkbox" class="checkbox checkbox-primary checkbox-xs" />
        </td>
      </label>
      <td>
        <button className="text-primary ml-2">
          <Link to={`/update/${todo._id}`}>
            <FaPen />
          </Link>
        </button>
      </td>
      <td>
        {" "}
        <button className="text-primary ml-2" onClick={() => handleDelete(todo._id)}>
          <FaRegTrashAlt />
        </button>
      </td>

      <ToastContainer />
    </tr>
  );
};

export default Todo;
