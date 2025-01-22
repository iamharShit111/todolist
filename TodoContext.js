import { createContext,useContext } from "react";
export const TodoContext = createContext({
    todos: [
      {  id : 1,
        Todo:"Todo msg",
        completed : false
      }
    ], addTodo:(Todo)=>{},
    deleteTodo:(id)=>{},
    updatedTodo:(id,Todo)=>{},
    ToggleComplete:(id)=>{}
})
export const useTodo=()=>{
    return useContext(TodoContext)
}
export const Todoprovider = TodoContext.Provider
