
import IMask from 'imask';
import GetFields from './GetAPI/fields';
import FieldsSelect from './components/FieldsSelect';
import TextareaFields from './components/TextareaFields';
import InputFields from './components/InputFields';

const fields = GetFields();
const boxForm = document.querySelector('[data-js="form"]');

/* eslint indent: [2, 2] */
function fieldType(data) {
  data.forEach((item) => {
    switch (item.type) {
    case 'enumerable':
      FieldsSelect(item, boxForm);
      break;
    case 'big_text':
      TextareaFields(item, boxForm);
      break;
    case 'cep':
      InputFields(item, boxForm, 'tel');
      break;
    case 'small_text':
      InputFields(item, boxForm, 'text');
      break;
    case 'email':
      InputFields(item, boxForm, 'email');
      break;
    case 'phone':
      InputFields(item, boxForm, 'tel');
      break;
    default:
      console.log('not filds');
    }
  });
}

fields.then((data) => {
  data.forEach((item) => {
    fieldType(item._embedded.request_fields);
    fieldType(item._embedded.user_fields);
  });
});

function MasksFilds() {
  const elementCep = document.querySelector('[data-mask="cep"]');
  const elementPhone = document.querySelector('[data-mask="phone"]');
  /* eslint-disable no-unused-vars */
  const mask = new IMask(elementCep, {
    mask: '00000-000',
  });
  const phoneMask = new IMask(elementPhone, {
    mask: '(00) 0.0000-0000',
  });
}

function sendForm() {
  const button = document.querySelector('[data-js="sendForm"]');
  const fieldsRequired = document.querySelectorAll('[data-required="true"]');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const all = document.querySelectorAll('.form__field-required');
    all.forEach(item => item.remove());
    fieldsRequired.forEach((item) => {
      if (item.value === '') {
        const markup = '<p class="form__field-required">Esse campo é obrigatório.<p>';
        item.classList.add('required');
        item.insertAdjacentHTML('afterend', markup);
      }
      item.classList.remove('required');
    });
  });
}

window.addEventListener('load', () => {
  MasksFilds();
  sendForm();
});
