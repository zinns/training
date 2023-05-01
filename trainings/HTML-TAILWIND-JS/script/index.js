const pokemonContainer = document.querySelector('#pokemon-container');

const pokedex = id => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
      listPokemon(data);
    });
};

const allPokemons = num => {
  for (let i = 1; i <= num; i++) {
    pokedex(i);
  }
};

const listPokemon = pokemon => {
  const container = document.createElement('div');

  container.classList.add(
    'w-72',
    'h-80',
    'border-2',
    'border-black',
    'rounded-lg',
    'flex',
    'justify-center',
    'items-center',
    'gap-2',
  );

  const number = document.createElement('span');

  number.textContent = `#${pokemon.id.toString()}`;

  const name = document.createElement('span');

  name.classList.add('name');
  name.textContent = pokemon.name;

  container.appendChild(number);
  container.appendChild(name);

  pokemonContainer.appendChild(container);
};

allPokemons.sort(allPokemons(250));
