const pokemonContainer = document.querySelector('#pokemon-container');

const pokedex = id => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
      listPokemon(data);
    });
};

const allPokemons = async num => {
  const promises = [];

  for (let i = 1; i <= num; i++) {
    promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
    pokedex(i);
  }
  const results = await Promise.all(promises);

  results.forEach(pokemon => {
    listPokemon(pokemon);
  });
};

let loadedPokemons = 0;

const listPokemon = pokemon => {
  const container = document.createElement('div');

  container.classList.add(
    'w-56',
    'h-64',
    'border-2',
    'border-black',
    'rounded-lg',
    'flex',
    'justify-center',
    'items-center',
    'gap-2',
  );

  const number = document.createElement('span');

  number.textContent = `#${pokemon.id}`;

  const name = document.createElement('span');

  name.textContent = `${pokemon.name}`;

  container.appendChild(number);
  container.appendChild(name);

  if (pokemon.id === loadedPokemons + 1) {
    loadedPokemons++;
    pokemonContainer.appendChild(container);
  }
};

allPokemons(250);
