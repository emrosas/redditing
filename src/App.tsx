import Counter from "./features/counter/Counter";
import TodosModal from "./features/todos/TodosModal";

function App() {
  return (
    <main className="h-screen bg-violet-950 flex flex-col items-center justify-center gap-16 text-slate-300">
      <header className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-3xl font-semibold">Setting up Redux Toolkit</h1>
        <p className=" text-violet-300">
          We're following the Redux Toolkit tutorial to set up Redux for this
          Reddit Clone project.
        </p>
      </header>
      <Counter />
      <TodosModal />
    </main>
  );
}

export default App;
