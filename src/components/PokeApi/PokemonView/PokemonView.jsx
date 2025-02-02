import { nanoid } from 'nanoid';

function PokemonView({ pokemonInfo }) {
  return (
    <ul style={{ listStyle: 'none' }}>
      <li>
        <h1>{pokemonInfo.name}</h1>
      </li>
      <li>
        <img
          src={pokemonInfo.sprites.other['official-artwork'].front_default}
          alt="pic"
          width="200"
        />
      </li>
      {pokemonInfo.stats.map(stats => (
        <li style={{ display: 'flex' }} key={nanoid()}>
          <p style={{ margin: '0' }}>{stats.stat.name}: </p>
          <p style={{ margin: '0' }}>{stats.base_stat}</p>
        </li>
      ))}
    </ul>
  );
}

export { PokemonView };
