import { pageLoad } from './pageload';
import { menuPage } from './menu';
import { homePage } from './homepage';
import { contactPage } from './contact';

function createAndAppend(elementType, eleClass, eleID, eleText, eleParent) {
  let element = document.createElement(elementType);
  if (eleClass) {
    element.classList.add(eleClass);
  }
  if (eleID) {
    element.setAttribute('id', eleID);
  }
  if (eleText) {
    element.textContent = eleText;
  }
  eleParent.appendChild(element);
  return element;
}

const headerEls = document.getElementsByClassName('headerEls');
const pageTitle = document.getElementById('page-title');
const topCont = document.getElementById('topCont');
const bottCont = document.getElementById('bottCont');

let homeStatus = true;
let menuStatus = false;
let contactStatus = false;

const setPageStatus = (bool1, bool2, bool3) => {
  homeStatus = bool1;
  menuStatus = bool2;
  contactStatus = bool3;
};

let headerArr = Array.from(headerEls);

for (let i = 0; i < headerArr.length; i++) {
  headerArr[i].addEventListener('click', () => {
    if (i === 0) {
      if (homeStatus === false) {
        setPageStatus(true, false, false);
        topCont.innerHTML = '';
        homePage();
      }
    } else if (i === 1) {
      if (menuStatus === false) {
        setPageStatus(false, true, false);
        topCont.innerHTML = '';
        menuPage();
      }
    } else if (i === 2) {
      if (contactStatus === false) {
        setPageStatus(false, false, true);
        topCont.innerHTML = '';
        contactPage();
      }
    }
  });
}

export { createAndAppend, pageTitle, topCont };
