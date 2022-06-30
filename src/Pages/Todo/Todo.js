import React from "react";

const Todo = ({ todo }) => {
  console.log(todo);
  return (
    <div class=" w-4/12 mx-auto">
      <label class="cursor-pointer">
        <span class="label-text mr-6">{todo.name}</span>
        <input type="checkbox" class="checkbox checkbox-primary" />
      </label>
    </div>
  );
};

export default Todo;
