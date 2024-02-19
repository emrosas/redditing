import { useAppDispatch, useAppSelector } from "../../hooks";
import { decrement, increment } from "./counterSlice";

function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <section className="flex flex-col items-center gap-2">
      <h2 className="text-lg uppercase">
        The current count is: <span className="font-bold">{count}</span>
      </h2>
      <div className="flex gap-4 items-center">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className="px-3 py-1 bg-violet-400 text-violet-950 rounded-md font-medium hover:outline outline-violet-700 hover:bg-violet-500 transition-colors">
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          className="px-3 py-1 bg-violet-400 text-violet-950 rounded-md font-medium hover:outline outline-violet-700 hover:bg-violet-500 transition-colors">
          Decrement
        </button>
      </div>
    </section>
  );
}

export default Counter;
