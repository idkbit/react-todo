import { useContext } from "react";
import TodosContext from "../TodosContext";
import Buttons from "./Buttons";
import Todo from "./Todo";
import { List, StyledTodoList, TodoListFooter } from "./TodoListStyles";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TodoList = () => {
  const { todos, setTodos, filter } = useContext(TodosContext);
  const renderTodo = ({ text, isCompleted, id }, index) => (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <Todo
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          text={text}
          isCompleted={isCompleted}
          id={id}
        />
      )}
    </Draggable>
  );

  const renderedTodos = todos.map(({ text, isCompleted, id }, index) => {
    if (filter === "all") {
      return renderTodo({ text, isCompleted, id }, index);
    }
    if (filter === "active" && !isCompleted) {
      return renderTodo({ text, isCompleted, id }, index);
    }
    if (filter === "completed" && isCompleted) {
      return renderTodo({ text, isCompleted, id }, index);
    }
    return null;
  });

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
  };

  return (
    <StyledTodoList>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <List {...provided.droppableProps} ref={provided.innerRef}>
              {renderedTodos}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>

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
