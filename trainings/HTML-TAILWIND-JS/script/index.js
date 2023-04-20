const tabs = document.querySelectorAll('#tab');

let position;

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    position = tab;

    tabs.forEach(cap => {
      cap.classList.remove('bg-red', 'text-white');
    });

    position.classList.add('bg-red', 'text-white');
  });
});
