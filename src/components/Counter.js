import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  // get store values
  // useSelector & useDispatch is used only in functional component base 
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

  const decrementByTenHandler = () => {
    dispatch({type: 'incrementByTen', payload: 10})
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={decrementByTenHandler}>increment by 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
