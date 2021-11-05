import styled from "styled-components";
import checked from "../images/icon-check.svg";
import cross from "../images/icon-cross.svg";

export const TodoStyled = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgTodolist};
  align-items: flex-end;
  padding: 1rem;
  align-items: flex-end;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.activeColor};
  button {
    opacity: 0;
    background-color: transparent;
    border: none;
    background-image: url(${cross});
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    place-content: center;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    &:focus,
    &:hover {
      opacity: 1;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: flex-end;
  width: 100%;
  cursor: pointer;
  &:hover + button {
    opacity: 1;
  }
  .gradient {
    position: relative;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.borderColor};
    display: grid;
    place-content: center;
    &:focus-within,
    &:hover {
      background-image: linear-gradient(
        to right,
        hsl(192, 100%, 67%),
        hsl(280, 87%, 65%)
      );
    }
  }
  input {
    appearance: none;
  }
  span {
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.bgTodolist};
  }
  .gradient input:checked + span {
    background: linear-gradient(
      120deg,
      hsl(192, 100%, 67%),
      hsl(280, 87%, 65%)
    );
    &::after {
      content: "";
      background-image: url(${checked});
      background-repeat: no-repeat;
      background-size: 15px;
      background-position: center;
      position: absolute;
      inset: 0;
      border-color: transparent;
    }
  }
  p {
    margin-left: 1.5rem;
  }
  &.checked {
    text-decoration: line-through;
    color: ${(props) => props.theme.passiveColor};
    .gradient {
      background-image: linear-gradient(
        120deg,
        hsl(192, 100%, 67%),
        hsl(280, 87%, 65%)
      );
    }
  }
`;
