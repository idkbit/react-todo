import styled from "styled-components";

export const StyledTodoList = styled.main`
  background-color: ${(props) => props.theme.bgTodolist};
  margin-top: 2rem;
  border-radius: 5px;
  font-size: 1.125rem;
  overflow: hidden;
  ${(props) =>
    props.theme.boxShadow ? "box-shadow: 0 0 15px 1px rgba(0,0,0,.1)" : ""}
`;

export const TodoListFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem;
  .items-left {
    color: ${(props) => props.theme.itemsLeft};
    font-size: 0.8rem;
  }

  .clear > button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    font-family: inherit;
    color: ${(props) => props.theme.itemsLeft};
    transition: color 0.3s ease;
    &:hover {
      color: ${(props) => props.theme.activeColor};
    }
  }
`;

export const List = styled.ul`
  list-style-type: none;
`;
