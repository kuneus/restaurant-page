import { pageLoad } from './pageload';

function createElement(elementType, eleClass, id, text) {
  let element = document.createElement(elementType);
  if (eleClass) {
    element.classList.add(eleClass);
  }
  if (id) {
    element.id(id);
  }
  if (text) {
    element.textContent = text;
  }
}

export { createElement };
