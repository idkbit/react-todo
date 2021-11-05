import styled from "styled-components";

export const StyledButtons = styled.div`
  display: flex;
  @media (max-width: 450px) {
    display: none;
  }
  &.buttons-mobile {
    display: none;
    background-color: ${(props) => props.theme.bgTodolist};
    padding: 1rem;
    border-radius: 5px;
    @media (max-width: 450px) {
      display: flex;
      justify-content: center;
      width: 90vw;
      margin: 2rem auto 0;
      ${(props) =>
        props.theme.boxShadow ? "box-shadow: 0 0 15px 1px rgba(0,0,0,.1)" : ""}
    }
  }
  button {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.buttonColor};
    font-weight: 700;
    font-family: inherit;
    font-size: 1rem;
    transition: color 0.3s ease;
    &.active {
      color: hsl(220, 98%, 61%);
    }
    &:not(:last-child) {
      margin-right: 1rem;
    }
    &:not(.active):hover {
      color: ${(props) => props.theme.buttonHover};
    }
  }
`;
