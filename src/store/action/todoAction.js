export const addTodo = (data) => {
  return {
    type: "ADD",
    payload: data,
  };
};
export const editTodo = (data) => {
  return {
    type: "Edit",
    payload: data,
  };
};
export const delTodo = (data) => {
  return {
    type: "DEL",
    payload: data,
  };
};
  