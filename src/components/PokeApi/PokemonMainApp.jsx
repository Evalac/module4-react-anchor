import { useRef, useEffect, useState } from 'react';
import { PokemonInput } from './PokemonInput/PokemonInput';

import { PokemonInfo } from './PokemonInfo/PokemonInfo';

function PokemonMainApp(params) {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <div>
      <PokemonInput onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
    </div>
  );
}

export { PokemonMainApp };
