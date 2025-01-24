import { useState } from 'react';

function Counter(params) {
  const [initValue, setValue] = useState(0);

  const incrementValue = value => {
    setValue(initValue + 1);
  };

  return (
    <div>
      <button type="button" onClick={incrementValue}>
        Клікнули лічильник A {initValue} раз
      </button>
      <button type="button" onClick={() => {}}>
        Клікунули лічильник Б {'0'} раз
      </button>
    </div>
  );
}

export { Counter };
