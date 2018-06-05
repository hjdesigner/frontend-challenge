
/* eslint indent: [2, 2] */
export default function InputFields(data, element, type) {
  const elementHTML = element;
  const item = data;
  const inputType = type;
  const markup = `<div class="form__field">
    <label for="${item.name}" class="form__label">${item.label}</label>
    <input type="${inputType !== '' ? inputType : 'text'}" name="${item.name}" id="${item.name}" class="form__input form__input--${item.type}" data-mask="${item.type}" placeholder="${item.placeholder}" data-required="${item.required === true ? 'true' : 'false'}">
  </div>`;
  elementHTML.insertAdjacentHTML('beforeend', markup);
}
