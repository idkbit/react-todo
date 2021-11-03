import { useContext, useState } from "react";
import TodosContext from "../TodosContext";
import { v4 as uuid } from "uuid";
import { Circle, Form, Input } from "./NewTodoStyles";

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
