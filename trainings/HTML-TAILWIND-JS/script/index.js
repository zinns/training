const pokemonContainer = document.querySelector('#pokemon-container');
const buttons = [...document.querySelectorAll('#capsule')];

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

  const pokemonName = pokemon.name;

  const transformName = () => {
    const splitName = pokemonName.split('');

    splitName[0] = splitName[0].toUpperCase();

    return splitName.join('');
  };

  container.classList.add('rounded-lg', 'flex', 'flex-col', 'gap-2');

  container.innerHTML = `
  <div
  id="card"
  class="rounded-lg w-full flex flex-col h-full p-2 gap-2"
>
  <div class="w-full flex justify-between text-white font-roboto text-2xl relative">
    <span class="absolute left-0 top-3 z-20">${transformName(pokemonName)}</span>
    <span class="absolute right-0 z-20"># ${pokemon.id}</span>
  </div>
  <div class="w-full h-80 relative">
    <img id="image"
      class="w-full h-full -scale-x-100"
      src="${pokemon.sprites.versions['generation-iv']['heartgold-soulsilver'].front_default}"
      alt=""
    />
  </div>
  <div class="w-full flex justify-between">
    <div class="flex flex-col text-white text-2xl">
      <span class="font-roboto font-thin">Type</span>
      <span id="type" class="pl-7 font-nunito font-thin">Electric</span>
    </div>
    <div class="flex flex-col text-white items-center">
      <span  id="like" class="cursor-pointer relative z-20">
        <svg
          width="23"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <span
        id="caught"
        class="cursor-pointer relative z-20 pl-3"
      >
        <svg
          width="43"
          height="42"
          viewBox="0 0 43 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_175_2)">
            <path
              id="white-ball"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 15.9888V16L27.449 16C27.449 22.0751 22.4236 27 16.2245 27C10.0254 27 4.99999 22.0751 4.99999 16C4.99999 15.9963 5 15.9925 5 15.9888Z"
            />
            <path
              id="red-ball"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.449 16C27.449 9.92487 22.4236 5 16.2245 5C10.0254 5 5 9.92487 5 16H27.449Z"
            />
            <path
              id="line"
              d="M26.949 16C26.949 21.7895 22.157 26.5 16.2245 26.5C10.2919 26.5 5.5 21.7895 5.5 16C5.5 10.2105 10.2919 5.5 16.2245 5.5C22.157 5.5 26.949 10.2105 26.949 16Z"
              stroke="white"
            />
            <path
              id="line"
              d="M18.5306 16C18.5306 17.2332 17.5077 18.25 16.2245 18.25C14.9413 18.25 13.9184 17.2332 13.9184 16C13.9184 14.7668 14.9413 13.75 16.2245 13.75C17.5077 13.75 18.5306 14.7668 18.5306 16Z"
              stroke="white"
            />
            <line
              id="line"
              x1="5.50513"
              y1="15.775"
              x2="13.9235"
              y2="15.775"
              stroke="white"
            />
            <line
              id="line"
              x1="18.5816"
              y1="15.775"
              x2="26.8877"
              y2="15.775"
              stroke="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_175_2"
              x="0"
              y="0"
              width="42.449"
              height="42"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood
                flood-opacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset
                dx="5"
                dy="5"
              />
              <feGaussianBlur stdDeviation="5" />
              <feComposite
                in2="hardAlpha"
                operator="out"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_175_2"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_175_2"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </span>
    </div>
  </div>
  <div class="w-full flex gap-6 text-white">
    <div class="flex flex-col">
      <span class="font-roboto">Stats</span>
      <span class="pl-3 font-nunito font-thin">Hp</span>
      <span class="pl-3 font-nunito font-thin">Defense</span>
      <span class="pl-3 font-nunito font-thin">Special-attack</span>
      <span class="pl-3 font-nunito font-thin">Speed</span>
    </div>
    <div class="flex flex-col items-center">
      <span class="font-roboto">Base</span>
      <span id="data-base" class="font-nunito font-thin">35</span>
      <span id="data-base" class="font-nunito font-thin">40</span>
      <span id="data-base" class="font-nunito font-thin">50</span>
      <span id="data-base" class="font-nunito font-thin">90</span>
    </div>
  </div>
</div>
  
  `;

  if (pokemon.id === loadedPokemons + 1) {
    loadedPokemons++;
    pokemonContainer.appendChild(container);
  }
};

allPokemons(250);
