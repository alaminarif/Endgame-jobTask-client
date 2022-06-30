import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = "http://localhost:5000/todo/";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          toast.success("success review");
        }
      });
    reset();
  };
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center mt-10">
        <input type="text" placeholder="Type here" class="input w-full max-w-xs border-primary" {...register("name")} />
        <input type="submit" className=" w-48 text-white btn btn-active btn-primary ml-4" value="Save" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default Home;
