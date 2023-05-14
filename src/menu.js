import { createAndAppend, topCont } from './index';

const menuPage = () => {
  console.log('menu clicked!');
  createAndAppend('div', null, 'page-title', 'Menu', topCont);
  const menuCont = createAndAppend('div', null, 'menu-cont', null, topCont);
  //   const menuTitle = createAndAppend('div', null, null, 'Menu', menuCont);
  //   welContainer.textContent = 'Menu';

  const menuItems = createAndAppend('div', null, 'menu-items', null, menuCont);
  // create item boxes for each menu item
  let menuArr = [
    'Latte',
    'Capuccino',
    'Cortado',
    'Americano',
    'Pour-over V2',
    'Pour-over Chemex',
    'Cold brew',
    'Kyoto Cold Brew',
  ];
  for (let i = 0; i < menuArr.length; i++) {
    createAndAppend('div', null, null, menuArr[i], menuItems);
  }
};

export { menuPage };
