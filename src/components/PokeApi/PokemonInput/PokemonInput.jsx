import { useState } from 'react';

function PokemonInput({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const onChangeInput = e => {
    setPokemonName(e.target.value.toLowerCase());
  };

  const submitPoke = e => {
    if (pokemonName.trim() === '') {
      e.preventDefault();
      alert('Введіть імʼя покемона');
      return;
    }
    e.preventDefault();
    onSubmit(pokemonName);
    setPokemonName('');
  };

  return (
    <div>
      <form onSubmit={submitPoke}>
        <input
          autoComplete="true"
          value={pokemonName}
          onChange={onChangeInput}
        />
        <button>Пошук</button>
      </form>
    </div>
  );
}

export { PokemonInput };
