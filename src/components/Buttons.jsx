import { useContext } from "react";
import TodosContext from "../TodosContext";
import { StyledButtons } from "./ButtonsStyles";

const Buttons = ({ className }) => {
  const { filter, setFilter } = useContext(TodosContext);
  return (
    <StyledButtons className={className}>
      <button
        className={`${filter === "all" ? "active" : ""}`}
        onClick={() => setFilter("all")}>
        All
      </button>
      <button
        className={`${filter === "active" ? "active" : ""}`}
        onClick={() => setFilter("active")}>
        Active
      </button>
      <button
        className={`${filter === "completed" ? "active" : ""}`}
        onClick={() => setFilter("completed")}>
        Completed
      </button>
    </StyledButtons>
  );
};

export default Buttons;
