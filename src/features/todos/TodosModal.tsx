import Todo from "./todo";
import { addTodo } from "./todosSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

function TodosModal() {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = e.currentTarget.querySelector("input")?.value;
    if (!title) return;
    dispatch(
      addTodo({
        id: Date.now().toString(),
        title,
        completed: false,
      })
    );
    e.currentTarget.reset();
  };
  return (
    <ul className="flex flex-col gap-2 items-center">
      <h2 className="text-lg uppercase">My Todo List</h2>
      <form
        aria-label="Add Todo Form"
        onSubmit={handleAddTodo}
        className="flex gap-2">
        <input type="text" className="bg-violet-500 rounded-md px-2" />
        <button
          aria-label="Add Todo"
          className="px-3 py-1 bg-violet-400 text-violet-950 rounded-md font-medium hover:outline outline-violet-700 hover:bg-violet-500 transition-colors">
          Add Todo
        </button>
      </form>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          id={todo.id}
        />
      ))}
    </ul>
  );
}

export default TodosModal;
