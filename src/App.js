import { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import TodosContext from "./TodosContext";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  return (
    <TodosContext.Provider value={{ todos, setTodos, filter, setFilter }}>
      <NewTodo />
      <TodoList />
    </TodosContext.Provider>
  );
};

export default App;
