import { useState, useReducer } from 'react';

function counterReducer(state, action) {
  console.log(action);

  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.playload };

    case 'decrement':
      return { ...state, count: state.count - action.playload };

    default:
      return state;
  }
}

function CounterHooks(params) {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Кількість кліків: {state.count}</p>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'increment', playload: 1 });
        }}
      >
        +1
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'decrement', playload: 1 });
        }}
      >
        -1
      </button>
    </div>
  );
}

export { CounterHooks };
