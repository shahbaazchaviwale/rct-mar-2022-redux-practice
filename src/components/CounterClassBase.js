import { Component } from "react";
import { connect } from "react-redux";
import classes from "./Counter.module.css";

class CounterClassBase extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter for class base</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>increment</button>
          <button onClick={this.decrementHandler.bind(this)}>decrement</button>
        </div>
       
      </main>
    );
  }
}

// step-1 get store value
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

// step-2 dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CounterClassBase);
