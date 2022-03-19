import { createStore } from "redux";

// step-2
const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1
        }
    }
    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1
        }
    }
    if(action.type === 'incrementByTen'){
        return {
            counter: state.counter + action.payload
        }
    }
    // this below  state will be unchange/default values
    return state;
}
// step-1
const store = createStore(counterReducer);

export default store;