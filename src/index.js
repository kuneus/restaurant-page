import { pageLoad } from './pageload';

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

export { createAndAppend };
