const pokedex = id => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
};

const allPokemons = num => {
  for (let i = 0; i <= num; i++) {
    pokedex(i);
  }
};

allPokemons(250);
