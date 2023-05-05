const buttons = [...document.querySelectorAll('#capsule')];
const pokemonContainer = document.querySelector('#pokemon-container');

const activeHover = ({ target }) => {
  if (target.dataset.active === 'false' && target.dataset.hovered === 'false') {
    target.classList.add('bg-red-100', 'text-blue');
  }
};

const disableHover = ({ target }) => {
  target.classList.remove('bg-red-100', 'text-blue');
};

const setActive = ({ target }) => {
  const preActive = buttons.filter(tab => tab.dataset.active === 'true');

  preActive[0].dataset.active = false;
  target.dataset.active = true;
  disableHover({ target });
};

buttons.forEach(tab => {
  tab.addEventListener('mouseover', activeHover);
  tab.addEventListener('mouseleave', disableHover);
  tab.addEventListener('click', setActive);
});

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
