import { useEffect, useState } from "react";
import { Container, DnDNotification, Header, Wrapper } from "./styles";
import TodosContext from "./TodosContext";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyles";
import { darkTheme, lightTheme } from "./themes";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

import moon from "./images/icon-moon.svg";
import sun from "./images/icon-sun.svg";
import Buttons from "./components/Buttons";

import {
  getFilterLocalStorage,
  getThemeLocalStorage,
  getTodosLocalStorage,
  setFilterLocalStorage,
  setThemeLocalStorage,
} from "./localStorage";

const initialTodos = getTodosLocalStorage();
const initialTheme = getThemeLocalStorage();
const initialFilter = getFilterLocalStorage();

const App = () => {
  const [todos, setTodos] = useState(initialTodos || []);
  const [filter, setFilter] = useState(initialFilter || "all");
  const [theme, setTheme] = useState(initialTheme || "dark");

  useEffect(() => {
    setThemeLocalStorage(theme);
  }, [theme]);

  useEffect(() => {
    setFilterLocalStorage(filter);
  }, [filter]);

  return (
    <TodosContext.Provider value={{ todos, setTodos, filter, setFilter }}>
      <GlobalStyle />
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <Wrapper>
          <Container>
            <Header>
              <h1>todo</h1>
              <button
                tabIndex="0"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                <img
                  src={theme === "dark" ? sun : moon}
                  alt={`Change theme to ${theme === "dark" ? "light" : "dark"}`}
                />
              </button>
            </Header>
            <NewTodo />
            <TodoList />
            <DnDNotification>Drag and drop to reorder list</DnDNotification>
          </Container>
          <Buttons className="buttons-mobile" />
        </Wrapper>
      </ThemeProvider>
    </TodosContext.Provider>
  );
};

export default App;
