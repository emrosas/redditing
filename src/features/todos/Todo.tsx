import { removeTodo } from "./todosSlice";
import { useAppDispatch } from "../../hooks";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

function Todo({ id, title, completed }: Todo) {
  const dispatch = useAppDispatch();
  return (
    <li className="flex gap-8 items-center">
      <h4>{title}</h4>
      <button
        aria-label="Remove Todo"
        onClick={() => dispatch(removeTodo(id))}
        className="text-red-500 text-xs">
        x
      </button>
    </li>
  );
}

export default Todo;
