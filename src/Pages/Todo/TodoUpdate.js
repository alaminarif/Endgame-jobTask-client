import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const TodoUpdate = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState([]);
  // const [update, setUpdate] = useState();
  useEffect(() => {
    const url = `https://sleepy-bayou-07140.herokuapp.com/todo/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    console.log(name);
    const updateName = { name };

    const url = `https://sleepy-bayou-07140.herokuapp.com/todo/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateName),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        toast.success("Update successfully!!!");
        e.target.reset();
      });
  };
  // const handleNameChange = (e) => {
  //   // const name = e.target.name.value;
  //   // console.log(name);
  // };
  return (
    <div>
      <h2 className="text-2xl font-semibold my-4">Name: {todo.name} </h2>
      <form onSubmit={handleUpdate}>
        <input type="text" placeholder="Type here" name="name" className="input w-full max-w-xs" />
        <input type="submit" className=" w-48 text-white btn btn-active btn-primary ml-4" value="Save" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default TodoUpdate;
