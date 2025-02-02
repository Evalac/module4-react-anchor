import { useEffect, useState, useRef } from 'react';

function SkipEffectFirstRender(params) {
  const [initValueA, setValueA] = useState(0);
  const [initValueB, setValueB] = useState(0);

  const firstRender = useRef(true);

  const incrementValueA = () => {
    setValueA(prevState => prevState + 1);
  };

  const incrementValueB = () => {
    setValueB(prevState => prevState + 1);
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    console.log('запустився useEfect' + Date.now());
    const totalClik = initValueA + initValueB;
    document.title = `Всього клікнули ${totalClik}`;
  }, [initValueA, initValueB]);

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

export { SkipEffectFirstRender };
