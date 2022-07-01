import { useState } from "react";
import { FaPen, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Todo = ({ todo, todos, setTodo, index }) => {
  const [agree, setAgree] = useState(true);
  // delete
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
  const handleChecked = (id) => {
    if (agree) {
      const url = `https://sleepy-bayou-07140.herokuapp.com/todo/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = todos.filter((todo) => todo._id !== id);
          setTodo(remaining);
          console.log(data);
          toast.success("Task Completed");
        });
      const urll = `http://localhost:5000/todoupdate`;
      fetch(urll, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };

  // update

  return (
    <tr className=" ">
      <td>{index + 1}</td>
      <label className=" cursor-pointer">
        <td className="w-full">
          <span className="label-text mr-6">{todo.name}</span>
        </td>
        <td>
          <input type="checkbox" onClick={() => handleChecked(todo._id)} className="checkbox checkbox-primary checkbox-xs" />
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
