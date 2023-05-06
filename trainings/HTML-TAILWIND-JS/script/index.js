const pokemonContainer = document.querySelector('#pokemon-container');

const pokedex = id => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
      listPokemon(data);
      console.log(data);
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

  container.classList.add('w-72', 'h-96', 'rounded-lg', 'flex', 'flex-col', 'gap-2', 'p-4');

  const nameId = document.createElement('div');

  nameId.classList.add('w-full', 'flex', 'justify-between');

  const number = document.createElement('span');

  number.textContent = `#${pokemon.id}`;

  const name = document.createElement('span');

  name.textContent = `${pokemon.name}`;

  const containerImage = document.createElement('div');

  containerImage.classList.add('w-32', 'h-32');

  const pokeImg = document.createElement('img');

  pokeImg.src = pokemon.sprites.front_default;

  container.appendChild(nameId);
  nameId.appendChild(name);
  nameId.appendChild(number);
  container.appendChild(containerImage);
  containerImage.appendChild(pokeImg);

  if (pokemon.id === loadedPokemons + 1) {
    loadedPokemons++;
    pokemonContainer.appendChild(container);
  }
};

allPokemons(250);
