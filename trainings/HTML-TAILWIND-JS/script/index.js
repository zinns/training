const tabs = document.querySelectorAll('#capsule');

const btnActive = () => {
  tabs.forEach(ele => {
    ele.addEventListener('click', () => {
      if (ele === 'click') {
        ele.classList.add('hover:bg-transparent');
      } else {
        ele.classList.add('hover:bg-red-100', 'hover:text-blue');
      }
    });
  });
};

btnActive();
