import styled from "styled-components";

export const StyledTodoList = styled.main`
  background-color: ${(props) => props.theme.bgTodolist};
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 5px;
  font-size: 1.125rem;
`;

export const TodoListFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
  }
`;

export const List = styled.ul`
  list-style-type: none;
`;
