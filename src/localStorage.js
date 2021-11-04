export const setTodosLocalStorage = (todos) => {
  return localStorage.setItem("todos", JSON.stringify(todos));
};

export const getTodosLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos"));
};

export const setThemeLocalStorage = (theme) => {
  return localStorage.setItem("theme", theme);
};

export const getThemeLocalStorage = () => {
  return localStorage.getItem("theme");
};
