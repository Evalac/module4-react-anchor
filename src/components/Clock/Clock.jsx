import { useEffect, useRef, useState } from 'react';

function Clock(params) {
  const [time, setTime] = useState(() => new Date());
  const intervalID = useRef(null);

  useEffect(() => {
    intervalID.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => stop();
  }, []);

  const stop = () => clearInterval(intervalID.current);

  // console.log(intervalID);

  return (
    <div>
      <p>Поточний час: {time.toString()}</p>
      <button type="button" onClick={stop}>
        Стоп
      </button>
    </div>
  );
}

export { Clock };
