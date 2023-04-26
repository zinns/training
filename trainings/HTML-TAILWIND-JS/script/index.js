const tabs = document.querySelectorAll('#capsule');

console.log(tabs);

tabs.forEach(ele => {
  ele.addEventListener('click', () => {
    ele.addEventListener('mouseenter', () => {
      ele.classList.toggle('hover:bg-transparent');
    });
  });
});
