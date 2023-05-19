import { createAndAppend, setHomeBG, topCont } from './index';

const contactPage = () => {
  // reset homepage background
  setHomeBG();

  // set title of page to 'Contact Us'
  createAndAppend('div', null, 'page-title', 'Contact Us', topCont);

  // form container and elements
  const formCont = createAndAppend('div', null, 'form-cont', null, topCont);
  const form = createAndAppend('form', null, null, null, formCont);
  const fullName = createAndAppend('input', null, 'fName', null, form);
  fullName.setAttribute('placeholder', 'Name');

  const email = createAndAppend('input', null, 'email', null, form);
  email.setAttribute('placeholder', 'Email');
  email.setAttribute('type', 'email');

  const phoneNumber = createAndAppend('input', null, 'phone', null, form);
  phoneNumber.setAttribute('placeholder', 'Phone Number');
  phoneNumber.setAttribute('type', 'tel');

  const messageField = createAndAppend('textarea', null, null, null, form);
  messageField.setAttribute('placeholder', 'Message');
  messageField.setAttribute('rows', '10');
  messageField.setAttribute('cols', '40');

  createAndAppend('button', null, 'submit-btn', 'Submit', form);
};

export { contactPage };
