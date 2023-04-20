const tabs = document.querySelectorAll('#tab');

let position;

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    position = tab;

    tabs.forEach(cap => {
      cap.classList.remove('bg-red', 'text-white');
      cap.classList.add('hover:bg-red-100', 'hover:text-blue');
    });

    position.classList.add('bg-red', 'text-white');
    position.classList.remove('hover:bg-red-100', 'hover:text-blue');
  });
});
