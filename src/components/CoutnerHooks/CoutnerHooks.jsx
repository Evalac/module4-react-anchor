import { useState, useReducer } from 'react';

function counterReducer(state, action) {
  console.log(action);

  switch (action.type) {
    case 'increment':
      return state + action.playload;

    case 'decrement':
      return state - action.playload;

    default:
      return state;
  }
}

function CounterHooks(params) {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <p>Кількість кліків: {count}</p>
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
