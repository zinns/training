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
    const arr = [];

    arr.push(pokedex(i));
    arr.sort((a, b) => a - b);
  }
};

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

  number.textContent = `#${pokemon.id.toString()}`;

  const name = document.createElement('span');

  name.textContent = pokemon.name;

  container.appendChild(number);
  container.appendChild(name);

  pokemonContainer.appendChild(container);
};

allPokemons(250);
