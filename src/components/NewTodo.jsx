import { useContext, useState } from "react";
import TodosContext from "../TodosContext";
import { v4 as uuid } from "uuid";

const NewTodo = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const [text, setText] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    setTodos([...todos, { text, isCompleted, id: uuid() }]);
    setText("");
    setIsCompleted(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="completed"></label>
      <input
        checked={isCompleted}
        onChange={() => setIsCompleted(!isCompleted)}
        type="checkbox"
      />
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
    </form>
  );
};

export default NewTodo;
