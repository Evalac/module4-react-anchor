import { useState, useEffect } from 'react';

const Anchor = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log(firstValue + secondValue);
  }, [firstValue, secondValue]);

  return (
    <>
      <button onClick={() => setFirstValue(firstValue + 1)}>
        First: {firstValue}
      </button>
      <button onClick={() => setSecondValue(secondValue + 1)}>
        Second: {secondValue}
      </button>
    </>
  );
};

export { Anchor };
