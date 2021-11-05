import styled from "styled-components";

export const Form = styled.form`
  background-color: ${(props) => props.theme.bgTodolist};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  ${(props) =>
    props.theme.boxShadow ? "box-shadow: 0 0 15px 1px rgba(0,0,0,.1)" : ""}
`;

export const Circle = styled.div`
  min-height: 26px;
  min-width: 26px;
  margin-right: 0.5rem;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid ${({ theme: { borderColor } }) => borderColor};
`;

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid transparent;
  width: 100%;
  font-family: inherit;
  font-size: 1.125rem;
  padding: 1rem;
  color: ${(props) => props.theme.activeColor};
  &::placeholder {
    color: ${(props) => props.theme.placeholder};
  }
  &:focus {
    outline: none;
    border-style: dashed;
    border-color: ${(props) => props.theme.activeColor};
  }
`;
