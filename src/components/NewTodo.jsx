import { useContext, useEffect, useState } from "react";
import TodosContext from "../TodosContext";
import { v4 as uuid } from "uuid";
import { Circle, Form, Input } from "./NewTodoStyles";
import { setLocalStorage } from "../localStorage";

const NewTodo = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const [text, setText] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    const newTodos = [...todos, { text, isCompleted, id: uuid() }];
    setTodos(newTodos);
    setText("");
    setIsCompleted(false);
  };

  useEffect(() => {
    setLocalStorage(todos);
  }, [todos]);

  return (
    <Form onSubmit={onSubmit}>
      <Circle />
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Create a new todo..."
      />
    </Form>
  );
};

export default NewTodo;
