import { Fragment } from "react";
import Counter from "./components/Counter";
import CounterClassBase from "./components/CounterClassBase";

function App() {
  return (
    <Fragment>
      <Counter />
      <CounterClassBase />
    </Fragment>
  );
}

export default App;
