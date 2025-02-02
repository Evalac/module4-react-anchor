import { useRef, useEffect, useState } from 'react';
import { PokemonInput } from './PokemonInput/PokemonInput';

import { PokemonInfo } from './PokemonInfo/PokemonInfo';

function PokemonMainApp(params) {
  const [pokemonName, setPokemonName] = useState('');

  // function rowSumOddNumbers(n) {
  //   let arr = [];

  //   for (let index = 0; index < 1000; index++) {
  //     arr.push(index + 1);
  //   }

  //   const filteredArr = arr.filter(element => element % 2);
  //   console.log(filteredArr);

  //   const reduceArr = filteredArr.reduce((acc, currenValue, index, array) => {
  //     return index < n ? acc + currenValue : acc;
  //   }, 0);

  //   return reduceArr;
  // }

  // console.log(rowSumOddNumbers(2));

  return (
    <div>
      <PokemonInput onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
    </div>
  );
}

export { PokemonMainApp };
