import { createAndAppend, topCont } from './index';

const menuPage = () => {
  // set title of page to 'Menu'
  createAndAppend('div', null, 'page-title', 'Menu', topCont);
  topCont.style.backgroundImage = "url('./images/jungle.png')";

  const menuCont = createAndAppend('div', null, 'menu-cont', null, topCont);
  const menuItems = createAndAppend('div', null, 'menu-items', null, menuCont);

  // create coffee menu objects
  function coffeeFactory(type, item, size1, price1, size2, price2, url) {
    return { type, item, size1, price1, size2, price2, url };
  }

  let coffeeArr = [];

  // construct coffee object and push to coffeeArr
  const makeAndPush = (type, item, size1, price1, size2, price2, url) => {
    let coffee = coffeeFactory(type, item, size1, price1, size2, price2, url);
    coffeeArr.push(coffee);
  };

  let bc = 'Brewed Coffee';
  let ex = 'Espresso';
  let sz = [
    '130 ml',
    '250 ml',
    '300 ml',
    '375 ml',
    '500 ml',
    '750 ml',
    '1000 ml',
    '400 ml',
  ];

  // function for getting URL
  const a = (item) => {
    return `url('./images/${item}.png')`;
  };

  // variables to prevent code from overflowing to next line for below functions
  const ncb = 'Nitro Cold Brew';
  const viet = 'Vietnamese Iced Coffee';

  // coffee objects
  makeAndPush(bc, 'V60 Pour Over', sz[1], '$5.50', sz[4], '$6.50', a('v60'));
  makeAndPush(bc, 'Chemex', sz[5], '$7.50', sz[6], '$8.50', a('chemex'));
  makeAndPush(bc, 'Siphon Coffee', sz[4], '$7.50', null, null, a('siphon'));
  makeAndPush(bc, 'Aeropress', sz[2], '$5.50', null, null, a('aeropress'));
  makeAndPush(bc, 'Cold Brew', sz[3], '$4.50', sz[4], '$5.00', a('coldbrew'));
  makeAndPush(bc, ncb, sz[3], '$5.50', sz[4], '$6.00', a('nitro'));
  makeAndPush(bc, 'French Press', sz[3], '$6.00', sz[4], '$7.00', a('fpress'));
  makeAndPush(bc, viet, sz[3], '$5.50', sz[4], '$6.00', a('viet'));
  makeAndPush(ex, 'Latte', sz[1], '$4.50', sz[7], '$5.00', a('latte'));
  makeAndPush(ex, 'Flat White', sz[1], '$4.50', sz[7], '$5.00', a('flatwhite'));
  makeAndPush(ex, 'Capuccino', sz[1], '$4.50', sz[7], '$5.00', a('capuccino'));
  makeAndPush(ex, 'Cortado', sz[0], '$3.75', null, null, a('cortado'));
  makeAndPush(ex, 'Gibraltar', sz[0], '$4.25', null, null, a('gibraltar'));
  makeAndPush(ex, 'Americano', sz[1], '$3.75', sz[3], '$4.00', a('americano'));
  makeAndPush(ex, 'Doppio', '60 ml', '$3.00', null, null, a('doppio'));
  makeAndPush(ex, 'Single shot', '30 ml', '$1.75', null, null, a('singleshot'));

  // containers for espresso and brewed coffee categories
  createAndAppend('div', 'coTitle', null, 'BREWED COFFEE', menuItems);
  let bcCont = createAndAppend('div', 'coCont', null, null, menuItems);
  createAndAppend('div', 'coTitle', null, 'ESPRESSO', menuItems);
  let exCont = createAndAppend('div', 'coCont', null, null, menuItems);

  // loop to append all the coffee objects to the DOM
  for (let i = 0; i < coffeeArr.length; i++) {
    // container for each coffee card
    let coffeeCard = document.createElement('div');
    coffeeCard.classList.add('coffeeCard');

    // set background image for each card and assign number to each item
    let coffeeImg = createAndAppend('div', 'imgCont', null, i + 1, coffeeCard);
    coffeeImg.style.backgroundImage = coffeeArr[i].url;

    // display coffee item and size and price
    let objInfo = createAndAppend('div', 'objInfo', null, null, coffeeCard);
    createAndAppend('div', null, null, coffeeArr[i].item, objInfo);
    const szLine1 = createAndAppend('div', 'sz-line', null, null, objInfo);
    createAndAppend('div', null, null, coffeeArr[i].size1, szLine1);
    createAndAppend('div', null, null, coffeeArr[i].price1, szLine1);
    if (coffeeArr[i].size2) {
      const szLine2 = createAndAppend('div', 'sz-line', null, null, objInfo);
      createAndAppend('div', null, null, coffeeArr[i].size2, szLine2);
      createAndAppend('div', null, null, coffeeArr[i].price2, szLine2);
    }
    if (coffeeArr[i].type === 'Brewed Coffee') {
      bcCont.appendChild(coffeeCard);
    } else if (coffeeArr[i].type === 'Espresso') {
      exCont.appendChild(coffeeCard);
    }
  }

  // Photo credit list for coffee photos
  let pcMsg = [
    'Chemex: Photo by Calvin Craig on Unsplash',
    'V60: Photo by Ben Moreland on Unsplash',
    'Siphon: Photo by Laura Landers on Unsplash',
    'Aeropress: Photo by Skylar Gordon on Unsplash',
    'Cold Brew: Photo by Tamara Schipchinskaya on Unsplash',
    'Nitro Cold Brew: Photo by Hatsfields London on Unsplash',
    'French Press: Photo by Pratik Gupta on Unsplash',
    'Vietnamese: Photo by Jon Spectacle on Unsplash',
    'Latte: Photo by Nathan Dumlao on Unsplash',
    'Flat White: Photo by Byron Breytenbach on Unsplash',
    'Capuccino: Photo by Daria Rudyk on Unsplash',
    'Cortado: Photo by Lex Sirikiat on Unsplash',
    'Gibraltar: Photo by Jenna Neal on Unsplash',
    'Americano: Photo by Oak & Bond Coffee Co. on Unsplash',
    'Doppio: Photo by Nathan Dumlao on Unsplash',
    'Single shot: Photo by Nathan Dumlao on Unsplash',
  ];

  const pcContainer = createAndAppend(
    'div',
    'pcContainer',
    null,
    'Photo credits: ',
    menuItems,
  );
  // append photo credit list to DOM
  for (let i = 0; i < pcMsg.length; i++) {
    createAndAppend('div', null, null, i + 1 + ' ' + pcMsg[i], pcContainer);
  }

  // photo credit for background image
  const jungleBG = 'Photo by Yoal Desurmont on Unsplash';
  document.getElementById('pcMsg').textContent = jungleBG;
};

export { menuPage };
