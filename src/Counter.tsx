import { counterContext } from "./counterContext";
import { CounterDisplay } from "./CounterDisplay";
import { useCounter } from "./useCounter";

export function Counter() {
  const [count, dispatch] = useCounter();

  return (
    <counterContext.Provider value={count}>
      <CounterDisplay />
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </counterContext.Provider>
  );
}
