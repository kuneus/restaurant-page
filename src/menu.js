import { createAndAppend, topCont } from './index';

const menuPage = () => {
  console.log('menu clicked!');

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

  // variables for images to use as arguments
  const v60 = "url('./images/v60.png')";
  const chemex = "url('./images/chemex.png')";
  const siphon = "url('./images/siphon.png')";
  const aPress = "url('./images/aeropress.png')";
  const cBrew = "url('./images/coldbrew.png')";
  const nitro = "url('./images/nitro.png')";
  const fPress = "url('./images/frenchpress.png')";
  const viet = "url('./images/vietnamese.png')";

  // coffee objects
  makeAndPush(bc, 'V60 Pour Over', sz[1], '$5.50', sz[4], '$6.50', v60);
  makeAndPush(bc, 'Chemex Pour Over', sz[5], '$7.50', sz[6], '$8.50', chemex);
  makeAndPush(bc, 'Siphon Coffee', sz[4], '$7.50', null, null, siphon);
  makeAndPush(bc, 'Aeropress Coffee', sz[2], '$5.50', null, null, aPress);
  makeAndPush(bc, 'Cold Brew', sz[3], '$4.50', sz[4], '$5.00', cBrew);
  makeAndPush(bc, 'Nitro Cold Brew', sz[3], '$5.50', sz[4], '$6.00', nitro);
  makeAndPush(bc, 'French Press', sz[3], '$6.00', sz[4], '$7.00', fPress);
  makeAndPush(
    bc,
    'Vietnamese iced coffee',
    sz[3],
    '$5.50',
    sz[4],
    '$6.00',
    viet,
  );
  makeAndPush(ex, 'Latte', sz[1], '$4.50', sz[7], '$5.00');
  makeAndPush(ex, 'Flat White', sz[1], '$4.50', sz[7], '$5.00');
  makeAndPush(ex, 'Capuccino', sz[1], '$4.50', sz[7], '$5.00');
  makeAndPush(ex, 'Cortado', sz[0], '$3.75');
  makeAndPush(ex, 'Gibraltar', sz[0], '$4.25');
  makeAndPush(ex, 'Americano', sz[1], '$3.75', sz[3], '$4.00');
  makeAndPush(ex, 'Doppio', '60 ml', '$3.00');
  makeAndPush(ex, 'Single shot', '30 ml', '$1.75');

  // containers for espresso and brewed coffee categories
  createAndAppend('div', 'coTitle', null, 'ESPRESSO', menuItems);
  let exCont = createAndAppend('div', 'coCont', null, null, menuItems);
  createAndAppend('div', 'coTitle', null, 'BREWED COFFEE', menuItems);
  let bcCont = createAndAppend('div', 'coCont', null, null, menuItems);

  // loop to append all the coffee objects to the DOM
  for (let i = 0; i < coffeeArr.length; i++) {
    let coffeeCard = document.createElement('div');
    coffeeCard.classList.add('coffeeCard');
    let coffeeImg = createAndAppend('div', 'imgCont', null, null, coffeeCard);
    coffeeImg.style.backgroundImage = coffeeArr[i].url;
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

    // if (coffeeArr[i].type === 'Brewed Coffee') {
    //   let bcCard = createAndAppend('div', 'coffeeCard', null, null, bcCont);
    //   let coffeeImg = createAndAppend('div', 'imgCont', null, null, bcCard);
    //   coffeeImg.style.backgroundImage = coffeeArr[i].url;
    //   createAndAppend('div', null, null, coffeeArr[i].item, bcCard);
    //   const szLine1 = createAndAppend('div', 'sz-line', null, null, bcCard);
    //   createAndAppend('div', null, null, coffeeArr[i].size1, szLine1);
    //   createAndAppend('div', null, null, coffeeArr[i].price1, szLine1);
    //   if (coffeeArr[i].size2) {
    //     const szLine2 = createAndAppend('div', 'sz-line', null, null, bcCard);
    //     createAndAppend('div', null, null, coffeeArr[i].size2, szLine2);
    //     createAndAppend('div', null, null, coffeeArr[i].price2, szLine2);
    //   }
    // } else if (coffeeArr[i].type === 'Espresso') {
    //   let exCard = createAndAppend('div', 'coffeeCard', null, null, exCont);
    //   createAndAppend('div', null, null, coffeeArr[i].item, exCard);
    //   const szLine1 = createAndAppend('div', 'sz-line', null, null, exCard);
    //   createAndAppend('div', null, null, coffeeArr[i].size1, szLine1);
    //   createAndAppend('div', null, null, coffeeArr[i].price1, szLine1);
    //   if (coffeeArr[i].size2) {
    //     const szLine2 = createAndAppend('div', 'sz-line', null, null, exCard);
    //     createAndAppend('div', null, null, coffeeArr[i].size2, szLine2);
    //     createAndAppend('div', null, null, coffeeArr[i].price2, szLine2);
    //   }
    // }
  }

  const chemexPC = 'Photo by Alireza Khatami on Unsplash';
  const v60PC = 'Photo by Ben Moreland on Unsplash';
  const siphonPC = 'Photo by Laura Landers on Unsplash';
  const aeropressPC = 'Photo by Skylar Gordon on Unsplash';
  const coldbrewPC = 'Photo by Tamara Schipchinskaya on Unsplash';
  const frenchpressPC = 'Photo by Pratik Gupta on Unsplash';
  const vietnamesePC = 'Photo by Jon Spectacle on Unsplash';
  const junglePC = 'Photo by Yoal Desurmont on Unsplash';
};

export { menuPage };
