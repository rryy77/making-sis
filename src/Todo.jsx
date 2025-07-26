/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Todo = ({ todo }) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.completed} readOnly />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;
