import { useState } from 'react';

function PokemonInput({ handleFormSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const onChangeInput = e => {
    setPokemonName(e.target.value);
  };

  const submitPoke = e => {
    e.preventDefault();
    handleFormSubmit(pokemonName);
  };

  return (
    <div>
      <p>Введіть імʼя покемону</p>
      <form onSubmit={submitPoke}>
        <input autoComplete="on" value={pokemonName} onChange={onChangeInput} />
        <button>Пошук</button>
      </form>
    </div>
  );
}

export { PokemonInput };
