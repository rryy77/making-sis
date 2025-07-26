import { useState, useRef } from "react";
import TodoList from "./ToDoList";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo1", completed: false },
  ]);

  // eslint-disable-next-line no-unused-vars
  const todoNameRef = useRef();

  const handleAddTodo = () => {
    //タスクを追加する
    // eslint-disable-next-line no-unused-vars
    const name = todoNameRef.current.value;
    // eslint-disable-next-line no-undef
    setTodos((prevTodo) => {
      return [...prevTodo, { id: "1", name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </>
  );
}

export default App;
