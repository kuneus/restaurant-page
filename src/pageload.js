import { createAndAppend } from './index';
// createAndAppend (elementType, eleClass, eleID, eleText, eleParent)

const pageLoad = (() => {
  const content = document.getElementById('content');

  // header
  const header = createAndAppend('header', 'header', null, null, content);

  // header elements
  let headerArr = ['Philosophy Coffee Company', 'Menu', 'Contact Us'];
  for (let i = 0; i <= 2; i++) {
    createAndAppend('div', null, null, headerArr[i], header);
  }

  const container = createAndAppend('div', 'main-cont', null, null, content);

  // main body
  const main = createAndAppend('div', 'main', 'main-body', null, container);
  main.style.backgroundImage = "url('./images/cafe.png')";

  // welcome message for main body
  const welContainer = createAndAppend('div', 'welCont', null, null, main);
  const welcomeMsg1 = 'Welcome to Philosophy Coffee Company';
  const welcomeMsg2 = 'Where great minds drink alike';
  createAndAppend('div', null, null, welcomeMsg1, welContainer);
  createAndAppend('div', null, null, welcomeMsg2, welContainer);

  // business hours
  const hoursContainer = createAndAppend('div', null, null, null, container);
  let daysArr = [
    'Business Hours:',
    'Mon: 6am - 9pm',
    'Tue: 6am - 9pm',
    'Wed: 6am - 9pm',
    'Thu: 6am - 9pm',
    'Fri: 6am - 11pm',
    'Sat: 8am - 11pm',
    'Sun: 8am - 9pm',
  ];
  for (let i = 0; i < daysArr.length; i++) {
    createAndAppend('div', null, null, daysArr[i], hoursContainer);
  }

  // footer
  const footer = createAndAppend('footer', 'footer', null, null, content);
  footer.innerHTML =
    'Made by Kuni <a href="https://github.com/kuneus"> @Kuneus<a>';
  const pcMsg = 'Photo by Polina Kuzovkova on Unsplash';
  createAndAppend('p', null, null, pcMsg, footer);
})();

export { pageLoad };
