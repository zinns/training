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

  container.style.display = 'flex';
  container.style.gap = '10px';

  const number = document.createElement('p');

  number.textContent = `#${pokemon.id.toString()}`;

  const name = document.createElement('p');

  name.classList.add('list:none');

  name.classList.add('name');
  name.textContent = pokemon.name;

  container.appendChild(number);
  container.appendChild(name);

  pokemonContainer.appendChild(container);
};

allPokemons(250);
