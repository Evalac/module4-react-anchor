const BASE_URL = `https://pokeapi.co/api/v2/pokemon`;

async function fetchPokemon(pokemonName) {
  try {
    const responce = await fetch(`${BASE_URL}/${pokemonName}`);
    if (responce.ok === false) {
      throw new Error(`Такого покемона не знайшли ${pokemonName}`);
    }
    const pokemon = await responce.json();
    return pokemon;
  } catch (error) {
    throw error;
  }
}

export { fetchPokemon };
