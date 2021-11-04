export const setTodosLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const getTodosLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos"));
};

export const setThemeLocalStorage = (theme) => {
  localStorage.setItem("theme", theme);
};

export const getThemeLocalStorage = () => {
  return localStorage.getItem("theme");
};

export const setFilterLocalStorage = (filter) => {
  localStorage.setItem("filter", filter);
};

export const getFilterLocalStorage = () => {
  return localStorage.getItem("filter");
};
