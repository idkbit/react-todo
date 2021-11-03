import styled from "styled-components";
import checked from "../images/icon-check.svg";
import cross from "../images/icon-cross.svg";

export const TodoStyled = styled.li`
  display: flex;
  justify-content: space-between;
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
  position: relative;
  display: flex;
  align-items: flex-end;
  padding-left: 4rem;
  width: 100%;
  &:hover + button {
    opacity: 1;
  }
  input {
    appearance: none;
    &:focus + span {
      border: 3px solid hsl(192, 100%, 67%);
    }
  }
  span {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border: 3px solid ${(props) => props.theme.borderColor};
    border-radius: 50%;
    background-color: transparent;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(-25%);
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
