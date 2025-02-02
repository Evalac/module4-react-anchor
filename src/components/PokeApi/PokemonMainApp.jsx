import { useRef, useEffect, useState } from 'react';
import { PokemonInput } from './PokemonInput/PokemonInput';
import { PokemonView } from './PokemonView/PokemonView';

function PokemonMainApp(params) {
  const [pokemonName, setPokemonName] = useState('');
  const [respPoke, setRespPoke] = useState([]);

  const fetchPoke = async () => {
    const BASE_URL = `https://pokeapi.co/api/v2/pokemon`;

    try {
      const respPoke = await fetch(`${BASE_URL}/${pokemonName}`);
      const reqPoke = await respPoke.json();
      return reqPoke;
    } catch (error) {
      console.log(error);
    }
  };

  // fetchPoke().then(data => setRespPoke(data));

  const handleFormSubmit = pokemonName => {
    setPokemonName(pokemonName);
  };

  return (
    <div>
      <PokemonInput handleFormSubmit={handleFormSubmit} />
      <PokemonView data={respPoke} />
    </div>
  );
}

export { PokemonMainApp };
