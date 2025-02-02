import { useState, useEffect } from 'react';
import * as PokemonApi from '../Services/PokemonApi';
import { PokemonView } from '../PokemonView/PokemonView';

const Status = {
  IDLE: 'idle', //в режимі очікування
  PENDING: 'pending', //очікується виконання
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (pokemonName === '') {
      return;
    }
    setStatus(Status.PENDING);

    PokemonApi.fetchPokemon(pokemonName)
      .then(pokemon => {
        setPokemon(pokemon);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [pokemonName]);

  if (status === Status.IDLE) {
    return <p>Введіть імʼя покемону</p>;
  }
  if (status === Status.PENDING) {
    return <p>Завантажується покемон...</p>;
  }

  if (status === Status.RESOLVED) {
    return <PokemonView pokemonInfo={pokemon} />;
  }

  if (status === Status.REJECTED) {
    return <p>{error.message}</p>;
  }
}

export { PokemonInfo };
