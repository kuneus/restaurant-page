import { createAndAppend, topCont } from './index';

const homePage = () => {
  // reset homepage background
  topCont.style.backgroundImage = "url('./images/cafe.png')";
  // welcome message for main body
  const pageTitle = createAndAppend('div', null, 'page-title', null, topCont);
  const welcomeMsg1 = 'Welcome to Philosophy Coffee Company';
  const welcomeMsg2 = 'Where great minds drink alike';
  createAndAppend('div', null, null, welcomeMsg1, pageTitle);
  createAndAppend('div', null, null, welcomeMsg2, pageTitle);

  // bottom container
  const bottomCont = createAndAppend('div', null, 'bottCont', null, topCont);

  // business hours
  const hoursContainer = createAndAppend(
    'div',
    'hours',
    null,
    null,
    bottomCont,
  );
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

  // address
  const addressCont = createAndAppend('div', 'address', null, null, bottomCont);
  let addressArr = ['Address', "375 Plato's Cave", 'Athens, Greece'];
  for (let i = 0; i < addressArr.length; i++) {
    createAndAppend('div', null, null, addressArr[i], addressCont);
  }
};

export { homePage };
