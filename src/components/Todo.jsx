import { useContext, useEffect, useState } from "react";
import { setLocalStorage } from "../localStorage";
import TodosContext from "../TodosContext";
import { Label, TodoStyled } from "./TodoStyled";

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
  }, [isDone, id, setTodos, text]);

  useEffect(() => {
    setLocalStorage(todos);
  }, [todos]);

  return (
    <TodoStyled>
      <Label className={isDone ? "checked" : ""}>
        <div className="gradient">
          <input checked={isDone} onChange={onChange} type="checkbox" />
          <span></span>
        </div>
        <p>{text}</p>
      </Label>

      <button onClick={onDeleteClick}></button>
    </TodoStyled>
  );
};

export default Todo;
