import { nanoid } from "nanoid";

export const addContacts = (name, number) => {
  return {
    type: "tasks/addTask",
    payload: {
      name,
      number,
      id,
    },
  };
};

export const deleteTask = (contactId) => {
  return {
    type: "tasks/deleteTask",
    payload: contactId,
  };
};

