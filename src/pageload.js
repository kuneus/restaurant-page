import { createElement } from './index';

const pageLoad = (() => {
  const content = document.getElementById('content');
  const header = document.createElement('header');
  header.classList.add('header');
  content.appendChild(header);

  for (let i = 0; i <= 2; i++) {
    const element = document.createElement('div');
    if (i === 0) {
      element.textContent = 'Philosophy Coffee Company';
    } else if (i === 1) {
      element.textContent = 'Menu';
    } else {
      element.textContent = 'Contact Us';
    }
    header.appendChild(element);
  }

  const main = document.createElement('div');
  main.classList.add('main');
  content.appendChild(main);
  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent =
    'Welcome to Philosophy Coffee Company! Where great minds drink alike';
  main.appendChild(title);
  // const example = createElement(
  //   'div',
  //   null,
  //   null,
  //   'Where great minds drink alike!',
  // );
  // main.appendChild(example);

  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.innerHTML =
    'Made by Kuni <a href="https://github.com/kuneus">@kuneus<a>';
  content.appendChild(footer);
})();

export { pageLoad };
