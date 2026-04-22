import { nanoid } from "nanoid";

export const addTask = (name) => {
  return {
    type: "tasks/addTask",
    payload: {
      name,
      number,
      id: nanoid(),
    },
  };
};

export const deleteTask = (contactId) => {
  return {
    type: "tasks/deleteTask",
    payload: contactId,
  };
};
