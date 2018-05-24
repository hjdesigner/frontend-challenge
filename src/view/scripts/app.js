
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
