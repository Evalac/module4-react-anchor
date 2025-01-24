import { useState } from 'react';

function Counter(params) {
  const [initValueA, setValueA] = useState(0);
  const [initValueB, setValueB] = useState(0);

  const incrementValueA = () => {
    setValueA(prevState => prevState + 1);
  };

  const incrementValueB = () => {
    setValueB(prevState => prevState + 1);
  };

  return (
    <div>
      <button type="button" onClick={incrementValueA}>
        Клікнули лічильник A {initValueA} раз
      </button>
      <button type="button" onClick={incrementValueB}>
        Клікунули лічильник Б {initValueB} раз
      </button>
    </div>
  );
}

export { Counter };
