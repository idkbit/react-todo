import styled from "styled-components";
import checked from "../images/icon-check.svg";

export const Form = styled.form`
  background-color: ${(props) => props.theme.bgTodolist};
  padding: 1.5rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  display: inline-block;
  background-color: transparent;
  width: 2rem;
  height: 2rem;
  border: 3px solid ${(props) => props.theme.borderColor};
  border-radius: 50%;
  position: relative;
  input {
    appearance: none;
  }
  span {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: transparent;
    position: absolute;
  }
  input:checked + span {
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
