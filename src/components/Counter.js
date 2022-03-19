import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  // get store values
  const counter = useSelector((state) => { return state.counter});
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    if(counter < 1){
      return;
    }
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
