import { useState } from "react";
import { Container, Header, Wrapper } from "./styles";
import TodosContext from "./TodosContext";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyles";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

//images
import bgImgDesktopDark from "./images/bg-desktop-dark.jpg";

const darkTheme = {
  bgColor: "hsl(235, 21%, 11%)",
  bgImgDesktop: bgImgDesktopDark,
  activeColor: "hsl(234, 39%, 85%)",
  h1: "#fff",
};

const lightTheme = {
  bgColor: "hsl(0, 0%, 98%)",
};

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
