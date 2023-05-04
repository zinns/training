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
