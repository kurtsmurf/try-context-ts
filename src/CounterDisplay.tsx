import { useContext } from "preact/hooks";
import { counterContext } from "./counterContext";

export function CounterDisplay() {
  const count = useContext(counterContext);

  return <h1>{count}</h1>;
}
