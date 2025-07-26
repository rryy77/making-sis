// eslint-disable-next-line no-unused-vars
import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return todos.map((todo) => <Todo todo={todos} key={todo} />);
};

export default TodoList;
