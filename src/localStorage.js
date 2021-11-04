export const setLocalStorage = (todos) => {
  return localStorage.setItem("todos", JSON.stringify(todos));
};

export const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos"));
};
