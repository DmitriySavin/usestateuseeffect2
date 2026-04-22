import { contacts } from "../App";

const tasksReducer = (state = contacts, action) => {
  switch (action.type) {
    case "addTask":
      return [...state, action.payload];

    case "deleteTask":
      return state.filter((contact) => contact.id !== action.payload);
  }
};
