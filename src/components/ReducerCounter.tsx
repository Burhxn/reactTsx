import { useReducer } from "react"
import { CounterState ,counterReducer } from "../reducer/CounterReducer"
const initialState : CounterState ={count : 0}

const ReducerCounter = () => {
   const [state, dispatch]= useReducer(counterReducer, initialState)
  return (
    <div>reducerCounter
        <h2>Count : {state.count}</h2>
        <button onClick={() => dispatch({type : "DECREMENT"})}>Decrement</button>
        <button onClick={() => dispatch({type : "INCREMENT"})}>Increment</button>
    </div>
  )
}

export default ReducerCounter