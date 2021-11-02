import { useState } from "react";
import { Container, Header, Wrapper } from "./styles";
import TodosContext from "./TodosContext";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyles";
import { darkTheme, lightTheme } from "./themes";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState("dark");

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
                {theme}
              </button>
            </Header>
            <NewTodo />
            <TodoList />
          </Container>
        </Wrapper>
      </ThemeProvider>
    </TodosContext.Provider>
  );
};

export default App;
