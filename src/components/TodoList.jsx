import { useContext } from "react";
import TodosContext from "../TodosContext";
import Todo from "./Todo";

const TodoList = () => {
  const { todos, setTodos, filter, setFilter } = useContext(TodosContext);

  const renderedTodos = todos.map(({ text, isCompleted, id }) => {
    if (filter === "all") {
      return <Todo key={id} text={text} isCompleted={isCompleted} id={id} />;
    }
    if (filter === "active" && !isCompleted) {
      return <Todo key={id} text={text} isCompleted={isCompleted} id={id} />;
    }
    if (filter === "completed" && isCompleted) {
      return <Todo key={id} text={text} isCompleted={isCompleted} id={id} />;
    }
    return null;
  });
  return (
    <main>
      <div>{renderedTodos}</div>
      <div className="bot">
        <div className="left">{todos.length} items left</div>
        <div className="buttons">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("active")}>Active</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
        </div>
        <div className="clear">
          <button
            onClick={() => setTodos(todos.filter((todo) => !todo.isCompleted))}>
            Clear completed
          </button>
        </div>
      </div>
    </main>
  );
};

export default TodoList;
