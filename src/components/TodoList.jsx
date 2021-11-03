import { useContext } from "react";
import TodosContext from "../TodosContext";
import Buttons from "./Buttons";
import Todo from "./Todo";
import { List, StyledTodoList, TodoListFooter } from "./TodoListStyles";

const TodoList = () => {
  const { todos, setTodos, filter } = useContext(TodosContext);

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
    <StyledTodoList>
      <List>{renderedTodos}</List>
      <TodoListFooter>
        <div className="items-left">{todos.length} items left</div>
        <Buttons />
        <div className="clear">
          <button
            onClick={() => setTodos(todos.filter((todo) => !todo.isCompleted))}>
            Clear completed
          </button>
        </div>
      </TodoListFooter>
    </StyledTodoList>
  );
};

export default TodoList;
