import { legacy_createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { tasksReducer } from "./reducer";

const enchancer = devToolsEnhancer();
export const store = legacy_createStore(tasksReducer, enchancer);
