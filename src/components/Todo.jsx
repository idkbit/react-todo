import { useContext, useEffect, useState } from "react";
import TodosContext from "../TodosContext";

const Todo = ({ text, isCompleted, id }) => {
  const { todos, setTodos } = useContext(TodosContext);
  const [isDone, setIsDone] = useState(isCompleted);
  const onChange = (e) => {
    setIsDone(e.target.checked);
  };
  const onDeleteClick = () => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  useEffect(() => {
    const editedTodo = { text, isCompleted: isDone, id };
    const newTodos = todos.map((todo) => (todo.id === id ? editedTodo : todo));
    setTodos(newTodos);
    //linter says i need to add 'todos' array to dependecies but it causes infite rerender
  }, [isDone, id, setTodos, text]);

  return (
    <li>
      <label>
        <input checked={isDone} onChange={onChange} type="checkbox" />
        <span>{text}</span>
      </label>
      <button onClick={onDeleteClick}>del</button>
    </li>
  );
};

export default Todo;
